# 🏗️ Shared Types Setup Guide

This guide explains how to set up and use shared Prisma + Zod types between your
server and client repositories.

## 📁 Current Structure

```
game/
├── server/                 # Your Express.js + Prisma server
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── src/
│   └── package.json
└── shared-types/           # Shared types package
    ├── package.json        # Package configuration
    ├── schemas/            # Generated Zod schemas
    ├── helpers/            # Generated helper types
    ├── index.ts     # Clean export interface
    ├── index.d.ts          # TypeScript declarations
    ├── README.md           # Package documentation
    ├── USAGE.md            # Usage examples
    └── publish.sh          # Publishing script
```

## 🚀 Quick Start

### 1. Generate Types

From the server directory, run:

```bash
npm run types:generate
```

This will:

- Generate Prisma client and Zod schemas
- Copy the generated types to `../shared-types/`
- Prepare the package for publishing

### 2. Publish Package

Navigate to the shared-types directory and publish:

```bash
cd ../shared-types
./publish.sh
```

Or manually:

```bash
cd ../shared-types
npm publish
```

### 3. Install in Client

In your client repository:

```bash
npm install @game-sandbox/types
```

## 🔧 Configuration Details

### Prisma Schema

Your `prisma/schema.prisma` is configured to output Zod types:

```prisma
generator zod {
  provider = "prisma-zod-generator"
  output   = "./../shared-types"
}
```

### Package Configuration

The `shared-types/package.json` is set up for public npm publishing:

```json
{
  "name": "@game-sandbox/types",
  "version": "1.0.0",
  "main": "index.ts",
  "types": "index.ts",
  "publishConfig": {
    "access": "public"
  }
}
```

## 📦 Available Types

### Models

- `User` - User accounts
- `Character` - Player characters
- `Equipment` - Equipment items
- `Item` - Consumable items
- `Monster` - Enemy creatures
- `GameMap` - Game locations
- `BattleLog` - Battle history
- `JobClass` - Character classes
- And more...

### Enums

- `BattleResult` - Victory/Defeat
- `EquipmentType` - Weapon/Armor/Accessory
- `Rarity` - Item rarity levels
- `MapDifficulty` - Map difficulty
- `MonsterRank` - Monster strength

### Zod Schemas

All models include corresponding Zod validation schemas for runtime validation.

## 🛠️ Development Workflow

### 1. Update Database Schema

Modify `prisma/schema.prisma` in the server repo:

```prisma
model NewModel {
  id   String @id @default(cuid())
  name String
  // ... other fields
}
```

### 2. Generate and Prepare Types

```bash
npm run types:generate
```

### 3. Test the Package Locally

You can test the package locally before publishing:

```bash
cd ../shared-types
npm link
cd ../client-repo
npm link @game-sandbox/types
```

### 4. Publish Updates

```bash
cd ../shared-types
npm version patch  # or minor/major
npm publish
```

### 5. Update Client

```bash
cd ../client-repo
npm update @game-sandbox/types
```

## 📝 Scripts Reference

### Server Scripts

- `npm run types:generate` - Generate types and prepare package
- `npm run types:prepare` - Copy types to shared package directory

### Shared Types Scripts

- `./publish.sh` - Interactive publishing script
- `npm publish` - Direct npm publish

## 🔍 Troubleshooting

### Types Not Generated

1. Check Prisma schema path: `./../shared-types`
2. Ensure `prisma-zod-generator` is installed
3. Run `npx prisma generate` manually

### Package Not Found

1. Verify package name: `@game-sandbox/types`
2. Check if package is published: `npm view @game-sandbox/types`
3. Ensure you're logged into npm: `npm whoami`

### Type Errors

1. Update package version in client
2. Check TypeScript configuration
3. Verify import statements

## 🌟 Best Practices

1. **Version Management**: Use semantic versioning for breaking changes
2. **Testing**: Test types locally before publishing
3. **Documentation**: Keep README and USAGE files updated
4. **Consistency**: Use the same types across server and client
5. **Validation**: Leverage Zod schemas for runtime validation

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Zod Documentation](https://zod.dev)
- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

## 🤝 Contributing

When contributing to the shared types:

1. Update the Prisma schema
2. Generate types with `npm run types:generate`
3. Test the package locally
4. Update documentation if needed
5. Publish with appropriate version bump
6. Update client repositories

---

**Happy coding! 🎮✨**
