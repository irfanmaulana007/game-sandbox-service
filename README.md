# Game Sandbox Backend Service

A comprehensive backend service for the Game Sandbox RPG game, built with
Express.js, TypeScript, and Prisma ORM.

## 🚀 Features

- **Authentication System**: JWT-based user authentication with registration and
  login
- **Character Management**: Create, update, and manage game characters with
  different job classes
- **Equipment System**: Comprehensive equipment management with rarity and stat
  bonuses
- **Monster System**: Dynamic monster generation with different ranks and
  difficulty levels
- **Battle System**: Turn-based combat simulation with experience and gold
  rewards
- **Inventory Management**: Character inventory system for items and equipment
- **Map System**: Game maps with different difficulty levels and monster spawns
- **Faker.js Integration**: Realistic test data generation for development and
  testing

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Data Generation**: Faker.js for realistic test data
- **Validation**: Express-validator for request validation
- **Security**: Helmet, CORS, rate limiting

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis (optional, for caching)

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd game-sandbox-server
npm install
```

### 2. Environment Setup

Copy the environment file and configure your database:

```bash
cp env.example .env
```

Edit `.env` with your database credentials:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/game_db
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=game_db
DATABASE_USER=username
DATABASE_PASSWORD=password

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=8000
NODE_ENV=development
```

### 3. Database Setup

Generate Prisma client and run migrations:

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed database with test data
npm run db:seed
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:8000`

## 📚 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (generates Prisma client + TypeScript)
- `npm start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:deploy` - Deploy migrations to production
- `npm run db:seed` - Seed database with Faker.js generated data
- `npm run db:reset` - Reset database (WARNING: deletes all data)
- `npm run db:studio` - Open Prisma Studio for database management
- `npm run postman:generate` - Generate Postman collection and environments

## 🧹 Code Quality

This project uses **ESLint** and **Prettier** for consistent code quality and
formatting:

- **ESLint**: TypeScript linting with strict rules and best practices
- **Prettier**: Automatic code formatting with consistent style
- **VS Code Integration**: Auto-format on save and real-time linting

### Code Quality Scripts

- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format all code with Prettier
- `npm run code:check` - Run both linting and formatting checks
- `npm run code:fix` - Fix both linting and formatting issues

### Quick Setup

1. Install VS Code extensions: **ESLint** and **Prettier**
2. Restart VS Code
3. Enjoy automatic formatting on save!

See `LINTING_SETUP.md` for detailed configuration and usage.

## 📱 API Testing

### Postman Collection

A complete Postman collection is automatically generated with:

- **All API Endpoints**: Organized by category (Auth, Characters, Equipment,
  etc.)
- **Environment Support**: Local, Staging, and Production environments
- **Automatic Authentication**: AUTH_TOKEN updates automatically after login
- **Example Data**: Ready-to-use request bodies and parameters

### Quick Setup

1. Run `npm run postman:generate` to create/update the collection
2. Import `Game-Sandbox-API.postman_collection.json` into Postman
3. Import your preferred environment file
4. Start testing with automatic token handling!

See `POSTMAN_QUICK_START.md` for detailed setup instructions.

## 🗄️ Database Schema

The database includes the following main entities:

- **Users**: Player accounts with authentication
- **Job Classes**: Character classes (Barbarian, Swordsman, Archer, Ninja)
- **Characters**: Player characters with stats and progression
- **Equipment**: Weapons, armor, and accessories with stat bonuses
- **Items**: Consumables, buffs, and special items
- **Monsters**: Enemies with different ranks and difficulty
- **Maps**: Game areas with level requirements and monster spawns
- **Battle Logs**: Combat history and rewards

## 🔐 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/logout` - User logout

### Characters

- `GET /api/characters` - Get user's characters
- `POST /api/characters` - Create new character
- `GET /api/characters/:id` - Get character details
- `PUT /api/characters/:id` - Update character
- `DELETE /api/characters/:id` - Delete character
- `POST /api/characters/:id/allocate-stats` - Allocate status points

### Equipment

- `GET /api/equipment` - Get all equipment
- `GET /api/equipment/:id` - Get equipment details
- `GET /api/equipment/type/:type` - Get equipment by type
- `GET /api/equipment/rarity/:rarity` - Get equipment by rarity

### Monsters

- `GET /api/monsters` - Get all monsters
- `GET /api/monsters/:id` - Get monster details
- `GET /api/monsters/map/:mapId` - Get monsters by map
- `GET /api/monsters/rank/:rank` - Get monsters by rank

### Maps

- `GET /api/maps` - Get all maps
- `GET /api/maps/:id` - Get map details
- `GET /api/maps/difficulty/:difficulty` - Get maps by difficulty
- `GET /api/maps/level/:minLevel` - Get maps by level requirement

### Battle

- `POST /api/battle/start` - Start a battle
- `GET /api/battle/:id` - Get battle details
- `GET /api/battle/character/:characterId` - Get character's battle history

### Inventory

- `GET /api/inventory/:characterId` - Get character inventory
- `POST /api/inventory/:characterId/items` - Add item to inventory
- `PUT /api/inventory/:characterId/items/:itemId` - Update item quantity
- `DELETE /api/inventory/:characterId/items/:itemId` - Remove item from
  inventory

## 🌱 Data Seeding

The service includes a comprehensive Faker.js-based seeder that generates
realistic test data:

- **Configurable**: Easy to modify data generation parameters
- **Realistic**: Uses Faker.js for authentic-looking data
- **Scalable**: Can generate thousands of records for testing
- **Balanced**: Maintains game balance with proper stat distributions

### Customizing Seeder

Edit `src/database/seeder.config.ts` to modify:

- Number of records to generate
- Distribution percentages for different types
- Level ranges and difficulty settings
- Date ranges for historical data

### Running Seeder

```bash
# Seed with default configuration
npm run db:seed

# Or run directly with custom config
npx ts-node src/database/faker-seeder.ts
```

## 🔧 Development

### Project Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── database/        # Database connection and seeding
├── middleware/      # Express middleware
├── models/          # Data models (Prisma handles this)
├── routes/          # API route definitions
├── services/        # Business logic services
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── index.ts         # Main application entry point
```

### Adding New Features

1. **Update Prisma Schema**: Modify `prisma/schema.prisma`
2. **Generate Client**: Run `npm run db:generate`
3. **Create Routes**: Add new route files in `src/routes/`
4. **Add Validation**: Update validation middleware
5. **Update Types**: Add new TypeScript interfaces

### Database Migrations

When you modify the Prisma schema:

```bash
# Create and apply migration
npm run db:migrate

# Deploy to production
npm run db:deploy
```

## 🧪 Testing

The service includes comprehensive validation and error handling:

- **Input Validation**: All endpoints validate request data
- **Authentication**: Protected routes require valid JWT tokens
- **Error Handling**: Consistent error responses across all endpoints
- **Rate Limiting**: API rate limiting to prevent abuse

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

Ensure these are set in production:

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Strong secret for JWT signing
- `NODE_ENV=production`
- `PORT` - Server port (default: 8000)

### Database

- Use `npm run db:deploy` for production migrations
- Ensure PostgreSQL is properly configured
- Consider connection pooling for high traffic

## 📖 API Documentation

The API follows RESTful conventions with consistent response formats:

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error description",
  "details": "Additional error details (optional)"
}
```

### Pagination

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:

1. Check the existing issues
2. Review the API documentation
3. Check the Prisma documentation
4. Create a new issue with detailed information

---

**Happy Gaming! 🎮**
