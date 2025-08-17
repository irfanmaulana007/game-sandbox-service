# Project Architecture

This document describes the refactored architecture of the Game Server API
project.

## Architecture Overview

The project follows a **layered architecture** pattern with clear separation of
concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                    Routes Layer                            │
│              (HTTP routing only)                           │
├─────────────────────────────────────────────────────────────┤
│                   Controllers Layer                        │
│           (HTTP request/response handling)                 │
├─────────────────────────────────────────────────────────────┤
│                    Services Layer                          │
│                (Business Logic)                            │
├─────────────────────────────────────────────────────────────┤
│                  Data Access Layer                         │
│              (Prisma ORM)                                  │
└─────────────────────────────────────────────────────────────┘
```

## Directory Structure

```
src/
├── controllers/          # HTTP layer - handle requests/responses
│   ├── authController.ts
│   ├── characterController.ts
│   ├── battleController.ts
│   ├── experienceController.ts
│   ├── inventoryController.ts
│   ├── equipmentController.ts
│   ├── mapsController.ts
│   └── monstersController.ts
├── services/            # Business logic layer
│   ├── authService.ts
│   ├── characterService.ts
│   ├── battleService.ts
│   ├── experienceService.ts
│   ├── inventoryService.ts
│   ├── equipmentService.ts
│   ├── mapsService.ts
│   └── monstersService.ts
├── routes/              # Only routing definitions
│   ├── auth.ts
│   ├── characters.ts
│   ├── battle.ts
│   ├── experience.ts
│   ├── inventory.ts
│   ├── equipment.ts
│   ├── maps.ts
│   └── monsters.ts
├── middleware/          # Request processing middleware
├── models/              # Data models (if needed)
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
└── config/              # Configuration files
```

## Layer Responsibilities

### 1. Routes Layer (`/routes`)

- **Purpose**: Define HTTP endpoints and middleware chains
- **Responsibilities**:
  - Route definitions
  - Middleware composition
  - Delegation to controllers
- **Example**:

```typescript
router.post('/register', (req, res) => authController.register(req, res));
```

### 2. Controllers Layer (`/controllers`)

- **Purpose**: Handle HTTP requests and responses
- **Responsibilities**:
  - Request validation
  - Response formatting
  - Error handling
  - Delegation to services
- **Example**:

```typescript
async register(req: Request, res: Response) {
  try {
    const newUser = await this.authService.registerUser(req.body);
    return sendCreated(res, newUser, 'User registered successfully');
  } catch (error) {
    // Handle specific errors and format responses
  }
}
```

### 3. Services Layer (`/services`)

- **Purpose**: Contain business logic
- **Responsibilities**:
  - Business rules
  - Data validation
  - Complex operations
  - Data access coordination
- **Example**:

```typescript
async registerUser(userData: CreateUserRequest) {
  // Check if user exists
  // Hash password
  // Create user
  // Return user data
}
```

### 4. Data Access Layer

- **Purpose**: Handle data persistence
- **Responsibilities**:
  - Database operations
  - Data queries
  - Transaction management
- **Implementation**: Prisma ORM

## Benefits of This Architecture

### 1. **Separation of Concerns**

- Routes only handle HTTP routing
- Controllers only handle HTTP concerns
- Services only handle business logic
- Each layer has a single responsibility

### 2. **Testability**

- Business logic can be unit tested independently
- Controllers can be tested with mocked services
- Services can be tested with mocked data access

### 3. **Maintainability**

- Logic is centralized and easier to modify
- Changes in one layer don't affect others
- Clear dependencies between layers

### 4. **Reusability**

- Services can be used by different controllers
- Business logic can be reused across the application
- Easy to add new features without touching existing code

### 5. **Scalability**

- Easy to add new endpoints
- Easy to modify business logic
- Easy to add new services

## Code Examples

### Before (Mixed Concerns in Routes)

```typescript
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Business logic mixed with HTTP handling
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User exists' });
    }

    // More business logic...
    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({...});

    return res.status(201).json({ data: newUser });
  } catch (error) {
    // Error handling...
  }
});
```

### After (Clean Separation)

```typescript
// Route (routing only)
router.post('/register', (req, res) => authController.register(req, res));

// Controller (HTTP handling)
async register(req: Request, res: Response) {
  try {
    const newUser = await this.authService.registerUser(req.body);
    return sendCreated(res, newUser, 'User registered successfully');
  } catch (error) {
    // Handle errors and format responses
  }
}

// Service (business logic)
async registerUser(userData: CreateUserRequest) {
  // All business logic here
  const existingUser = await this.checkUserExists(userData);
  const passwordHash = await this.hashPassword(userData.password);
  return await this.createUser(userData, passwordHash);
}
```

## Best Practices

### 1. **Error Handling**

- Services throw errors with meaningful messages
- Controllers catch errors and format HTTP responses
- Use custom error classes for different error types

### 2. **Validation**

- Use middleware for request validation
- Validate data in services before processing
- Return clear error messages

### 3. **Response Formatting**

- Use utility functions for consistent responses
- Standardize success/error response formats
- Include appropriate HTTP status codes

### 4. **Dependency Injection**

- Controllers depend on services
- Services can depend on other services
- Use constructor injection for dependencies

## Migration Guide

To refactor existing routes:

1. **Extract business logic** from routes into services
2. **Create controllers** to handle HTTP concerns
3. **Update routes** to delegate to controllers
4. **Test each layer** independently
5. **Update imports** and dependencies

## Testing Strategy

### Unit Tests

- **Services**: Test business logic with mocked data access
- **Controllers**: Test HTTP handling with mocked services
- **Routes**: Test routing and middleware composition

### Integration Tests

- Test complete request flows
- Test database interactions
- Test authentication and authorization

### Example Test Structure

```
tests/
├── unit/
│   ├── services/
│   └── controllers/
├── integration/
│   └── routes/
└── fixtures/
    └── test-data/
```

## Refactoring Status

✅ **Completed Refactoring**

- Auth Module (routes, controller, service)
- Character Module (routes, controller, service)
- Battle Module (routes, controller, service)
- Experience Module (routes, controller, service)
- Inventory Module (routes, controller, service)
- Equipment Module (routes, controller, service)
- Maps Module (routes, controller, service)
- Monsters Module (routes, controller, service)

✅ **Files Removed**

- `example.ts` - Unused example routes

## Current Project State

The project has been completely refactored to follow the layered architecture
pattern. All route files now contain only routing logic, with business logic
properly separated into services and HTTP concerns handled by controllers.

This architecture provides a solid foundation for building maintainable,
testable, and scalable Express.js applications.
