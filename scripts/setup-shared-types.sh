#!/bin/bash

# Script to set up shared types with package files

echo "🔄 Setting up shared types package..."

# Create shared-types directory if it doesn't exist
mkdir -p ./shared-types

echo "🔧 Now generating types with Prisma..."

# Generate types
npx prisma generate

echo "📦 Creating package files after type generation..."

# Create package.json
cat > ./shared-types/package.json << 'EOF'
{
  "name": "@game-sandbox/types",
  "version": "1.0.0",
  "description": "Shared Prisma + Zod types for Game Sandbox",
  "main": "index.ts",
  "types": "index.ts",
  "files": [
    "schemas",
    "helpers",
    "index.ts"
  ],
  "private": false,
  "publishConfig": {
    "access": "public"
  },
  "keywords": [
    "types",
    "prisma",
    "zod",
    "game",
    "rpg"
  ],
  "author": "Irfan Maulana",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/irfanmaulana007/game-sandbox-service.git"
  },
  "bugs": {
    "url": "https://github.com/irfanmaulana007/game-sandbox-service/issues"
  },
  "homepage": "https://github.com/irfanmaulana007/game-sandbox-service#readme"
}
EOF

# Create index.ts
cat > ./shared-types/index.ts << 'EOF'
// Custom index file for cleaner exports
// This provides a simpler API for consuming the types

// Export all schemas
export * from "./schemas";

EOF

# Create README.md
cat > ./shared-types/README.md << 'EOF'
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
EOF

# Create .gitignore
cat > ./shared-types/.gitignore << 'EOF'
# Dependencies
node_modules/

# Build outputs
*.js
*.js.map
*.d.ts

# Environment files
.env
.env.local
.env.*.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db
EOF

echo "✅ Package files created!"
echo "🎉 Shared types package setup complete!"
echo "📁 Check ./shared-types/ directory for the complete package"
