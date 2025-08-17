# @game-sandbox/types

Shared Prisma + Zod types for Game Sandbox project.

## Installation

```bash
npm install @game-sandbox/types
```

## Usage

```typescript
import { User, Character, Equipment, BattleResult } from "@game-sandbox/types";

// Use the types in your client-side code
const user: User = {
  id: "user123",
  username: "player1",
  email: "player@example.com",
  // ... other properties
};
```

## Available Types

This package includes all the generated types from your Prisma schema:

- **Models**: User, Character, Equipment, Item, Monster, etc.
- **Enums**: BattleResult, EquipmentType, Rarity, etc.
- **Schemas**: Zod validation schemas for all models
- **Helpers**: Utility types and helpers

## Development

These types are automatically generated from the Prisma schema in the server repository. To regenerate:

1. Update the Prisma schema
2. Run `npm run types:generate` in the server repo
3. The types will be automatically updated in this package

## License

MIT
