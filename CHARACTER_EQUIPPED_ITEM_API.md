# Character Equipped Item API

This API handles the management of equipped items for characters using the
`CharacterEquippedItem` table. This is separate from the `CharacterEquipment`
table and provides more granular control over equipment slots.

## Base URL

```
/api/character-equipped-items
```

## Authentication

All endpoints require authentication. Include the JWT token in the Authorization
header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### 1. Get All Equipped Items

**GET** `/:characterId`

Get all equipped items for a specific character.

**Parameters:**

- `characterId` (string, CUID) - The character's ID

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "cuid...",
      "equipment_id": 1,
      "character_id": "cuid...",
      "slot": "weapon",
      "created_at": "2024-01-01T00:00:00.000Z",
      "equipment": {
        "id": 1,
        "name": "Iron Sword",
        "type": "weapon",
        "rarity": "common",
        "min_level": 1,
        "health_bonus": 0,
        "attack_bonus": 10,
        "defense_bonus": 0,
        "speed_bonus": 0,
        "critical_bonus": 0,
        "description": "A basic iron sword",
        "buy_price": 100,
        "sell_price": 50
      }
    }
  ],
  "message": "Equipped items retrieved successfully"
}
```

### 2. Get Equipped Item by Slot

**GET** `/:characterId/slot/:slot`

Get the equipped item in a specific slot.

**Parameters:**

- `characterId` (string, CUID) - The character's ID
- `slot` (string) - The equipment slot (weapon, armor, accessory_1, accessory_2)

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "cuid...",
    "equipment_id": 1,
    "character_id": "cuid...",
    "slot": "weapon",
    "created_at": "2024-01-01T00:00:00.000Z",
    "equipment": {
      "id": 1,
      "name": "Iron Sword",
      "type": "weapon",
      "rarity": "common",
      "min_level": 1,
      "health_bonus": 0,
      "attack_bonus": 10,
      "defense_bonus": 0,
      "speed_bonus": 0,
      "critical_bonus": 0,
      "description": "A basic iron sword",
      "buy_price": 100,
      "sell_price": 50
    }
  },
  "message": "Equipped item retrieved successfully"
}
```

### 3. Equip Item

**POST** `/:characterId/equip/:equipmentId/:slot`

Equip an item from the character's inventory to a specific slot.

**Parameters:**

- `characterId` (string, CUID) - The character's ID
- `equipmentId` (integer) - The Equipment ID (not the CharacterEquipment ID)
- `slot` (string) - The equipment slot (weapon, armor, accessory_1, accessory_2)

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "cuid...",
    "equipment_id": 1,
    "character_id": "cuid...",
    "slot": "weapon",
    "created_at": "2024-01-01T00:00:00.000Z",
    "equipment": {
      "id": 1,
      "name": "Iron Sword",
      "type": "weapon",
      "rarity": "common",
      "min_level": 1,
      "health_bonus": 0,
      "attack_bonus": 10,
      "defense_bonus": 0,
      "speed_bonus": 0,
      "critical_bonus": 0,
      "description": "A basic iron sword",
      "buy_price": 100,
      "sell_price": 50
    }
  },
  "message": "Item equipped successfully"
}
```

**Error Cases:**

- Character not found
- Equipment not found in character inventory
- Character level too low for equipment
- Equipment type not compatible with slot
- Slot already occupied

### 4. Unequip Item by ID

**DELETE** `/:characterId/unequip/:equippedItemId`

Unequip an item using its equipped item ID.

**Parameters:**

- `characterId` (string, CUID) - The character's ID
- `equippedItemId` (string, CUID) - The CharacterEquippedItem ID

**Response:**

```json
{
  "success": true,
  "data": {
    "message": "Item unequipped successfully",
    "unequippedItem": {
      "id": "cuid...",
      "equipment_id": 1,
      "character_id": "cuid...",
      "slot": "weapon",
      "created_at": "2024-01-01T00:00:00.000Z",
      "equipment": {
        "id": 1,
        "name": "Iron Sword",
        "type": "weapon",
        "rarity": "common",
        "min_level": 1,
        "health_bonus": 0,
        "attack_bonus": 10,
        "defense_bonus": 0,
        "speed_bonus": 0,
        "critical_bonus": 0,
        "description": "A basic iron sword",
        "buy_price": 100,
        "sell_price": 50
      }
    }
  },
  "message": "Item unequipped successfully"
}
```

### 5. Unequip Item by Slot

**DELETE** `/:characterId/unequip-slot/:slot`

Unequip an item from a specific slot.

**Parameters:**

- `characterId` (string, CUID) - The character's ID
- `slot` (string) - The equipment slot (weapon, armor, accessory_1, accessory_2)

**Response:** Same as unequip by ID.

### 6. Swap Equipment

**PUT** `/:characterId/swap/:equipmentId/:slot`

Swap equipment in a slot. This will unequip the existing item (if any) and equip
the new item.

**Parameters:**

- `characterId` (string, CUID) - The character's ID
- `equipmentId` (integer) - The Equipment ID (not the CharacterEquipment ID)
- `slot` (string) - The equipment slot (weapon, armor, accessory_1, accessory_2)

**Response:**

```json
{
  "success": true,
  "data": {
    "newEquippedItem": {
      "id": "cuid...",
      "equipment_id": 2,
      "character_id": "cuid...",
      "slot": "weapon",
      "created_at": "2024-01-01T00:00:00.000Z",
      "equipment": {
        "id": 2,
        "name": "Steel Sword",
        "type": "weapon",
        "rarity": "uncommon",
        "min_level": 5,
        "health_bonus": 0,
        "attack_bonus": 15,
        "defense_bonus": 0,
        "speed_bonus": 0,
        "critical_bonus": 0,
        "description": "A steel sword",
        "buy_price": 200,
        "sell_price": 100
      }
    },
    "unequippedItem": {
      "id": "cuid...",
      "equipment_id": 1,
      "character_id": "cuid...",
      "slot": "weapon",
      "created_at": "2024-01-01T00:00:00.000Z",
      "equipment": {
        "id": 1,
        "name": "Iron Sword",
        "type": "weapon",
        "rarity": "common",
        "min_level": 1,
        "health_bonus": 0,
        "attack_bonus": 10,
        "defense_bonus": 0,
        "speed_bonus": 0,
        "critical_bonus": 0,
        "description": "A basic iron sword",
        "buy_price": 100,
        "sell_price": 50
      }
    }
  },
  "message": "Equipment swapped successfully"
}
```

## Equipment Slot Types

- `weapon` - For weapons (swords, axes, etc.)
- `armor` - For armor (helmets, chest pieces, etc.)
- `accessory_1` - For accessories (rings, necklaces, etc.)
- `accessory_2` - For accessories (rings, necklaces, etc.)

## Equipment Type Compatibility

- Weapons can only be equipped in the `weapon` slot
- Armor can only be equipped in the `armor` slot
- Accessories can be equipped in either `accessory_1` or `accessory_2` slots

## Character Stats Recalculation

When items are equipped or unequipped, the character's stats are automatically
recalculated based on:

1. Base stats from job class and level
2. Bonuses from all equipped items

The following stats are updated:

- `max_health`
- `attack`
- `defense`
- `speed`
- `critical`

## Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "message": "Error description",
  "errorStatus": 400
}
```

Common error messages:

- "Character not found"
- "Equipment not found in character inventory"
- "Character level X is too low for this equipment (requires level Y)"
- "Equipment type X is not compatible with slot Y"
- "Slot X is already occupied"
- "No item equipped in slot X"
- "Equipped item not found"
