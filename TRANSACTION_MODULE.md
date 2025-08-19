# Transaction Module Documentation

## Overview

The Transaction module provides functionality for buying and selling equipment
in the game. It handles the complete transaction lifecycle, including
validation, inventory management, and transaction history tracking.

## Features

- **Buy Equipment**: Purchase equipment from the shop using character gold
- **Sell Equipment**: Sell owned equipment back to the shop for gold
- **Transaction History**: Track all buy/sell transactions for characters
- **Validation**: Comprehensive validation for level requirements, gold
  availability, and equipment ownership
- **Atomic Transactions**: Database transactions ensure data consistency

## Database Schema

### Transaction Model

```prisma
model Transaction {
  id           String        @id @default(cuid())
  character_id String
  equipment_id Int
  type         TransactionType
  quantity     Int           @default(1)
  price        Int
  total_amount Int
  created_at   DateTime      @default(now())

  // Relations
  character Character @relation(fields: [character_id], references: [id], onDelete: Cascade)
  equipment Equipment @relation(fields: [equipment_id], references: [id])

  @@map("transactions")
}

enum TransactionType {
  buy
  sell
}
```

## API Endpoints

### Base URL

```
/api/transactions
```

### 1. Buy Equipment

**POST** `/api/transactions/buy`

Purchase equipment for a character.

**Request Body:**

```json
{
  "characterId": "string",
  "equipmentId": "number",
  "quantity": "number (optional, default: 1)"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Equipment purchased successfully",
  "data": {
    "transaction": {
      "id": "string",
      "characterId": "string",
      "equipmentId": "number",
      "type": "buy",
      "quantity": "number",
      "price": "number",
      "totalAmount": "number",
      "createdAt": "date",
      "equipment": {
        "id": "number",
        "name": "string",
        "type": "string",
        "rarity": "string"
      }
    },
    "message": "Successfully purchased 1x Iron Sword for 100 gold"
  }
}
```

**Validation Rules:**

- Character must exist
- Equipment must exist
- Character must meet minimum level requirement
- Character must have sufficient gold
- Quantity must be greater than 0

### 2. Sell Equipment

**POST** `/api/transactions/sell`

Sell equipment owned by a character.

**Request Body:**

```json
{
  "characterId": "string",
  "equipmentId": "number",
  "quantity": "number (optional, default: 1)"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Equipment sold successfully",
  "data": {
    "transaction": {
      "id": "string",
      "characterId": "string",
      "equipmentId": "number",
      "type": "sell",
      "quantity": "number",
      "price": "number",
      "totalAmount": "number",
      "createdAt": "date",
      "equipment": {
        "id": "number",
        "name": "string",
        "type": "string",
        "rarity": "string"
      }
    },
    "message": "Successfully sold 1x Iron Sword for 50 gold"
  }
}
```

**Validation Rules:**

- Character must exist
- Equipment must exist
- Character must own the equipment
- Equipment must not be equipped
- Quantity must be greater than 0

### 3. Get Character Transactions

**GET** `/api/transactions/character/:characterId`

Retrieve all transactions for a specific character.

**Response:**

```json
{
  "success": true,
  "message": "Character transactions retrieved successfully",
  "data": {
    "transactions": [
      {
        "id": "string",
        "characterId": "string",
        "equipmentId": "number",
        "type": "buy|sell",
        "quantity": "number",
        "price": "number",
        "totalAmount": "number",
        "createdAt": "date",
        "equipment": {
          "id": "number",
          "name": "string",
          "type": "string",
          "rarity": "string"
        }
      }
    ],
    "count": "number"
  }
}
```

### 4. Get Transaction by ID

**GET** `/api/transactions/:transactionId`

Retrieve a specific transaction by its ID.

**Response:**

```json
{
  "success": true,
  "message": "Transaction retrieved successfully",
  "data": {
    "transaction": {
      "id": "string",
      "characterId": "string",
      "equipmentId": "number",
      "type": "buy|sell",
      "quantity": "number",
      "price": "number",
      "totalAmount": "number",
      "createdAt": "date",
      "equipment": {
        "id": "number",
        "name": "string",
        "type": "string",
        "rarity": "string"
      }
    }
  }
}
```

## Business Logic

### Buy Equipment Process

1. Validate character exists and has sufficient gold
2. Validate equipment exists and character meets level requirement
3. Calculate total cost (buy_price × quantity)
4. Create transaction record
5. Deduct gold from character
6. Add equipment to character's inventory

### Sell Equipment Process

1. Validate character exists
2. Validate equipment exists and character owns it
3. Check equipment is not equipped
4. Calculate total earnings (sell_price × quantity)
5. Create transaction record
6. Add gold to character
7. Remove equipment from character's inventory

### Error Handling

- **400 Bad Request**: Invalid input data, insufficient gold, level requirement
  not met
- **404 Not Found**: Character or equipment not found
- **500 Internal Server Error**: Database or server errors

## Security

- All endpoints require authentication via JWT token
- Character ownership validation prevents unauthorized transactions
- Database transactions ensure data consistency
- Input validation prevents malicious requests

## Testing

Use the provided Postman collection to test the transaction endpoints:

1. **Setup**: Login and create a character
2. **Buy Equipment**: Purchase equipment using character gold
3. **Sell Equipment**: Sell owned equipment for gold
4. **View History**: Check transaction history for the character

### Test Scenarios

- Buy equipment with sufficient gold
- Buy equipment with insufficient gold
- Buy equipment below required level
- Sell owned equipment
- Sell equipped equipment (should fail)
- Sell equipment not owned (should fail)
- View transaction history
- View specific transaction details

## Integration

The Transaction module integrates with:

- **Character System**: Updates character gold and inventory
- **Equipment System**: References equipment data and prices
- **Authentication System**: Validates user permissions
- **Database**: Uses Prisma for data persistence

## Future Enhancements

- Bulk buy/sell operations
- Transaction filtering and search
- Transaction export functionality
- Price history tracking
- Market price fluctuations
- Trading between players
