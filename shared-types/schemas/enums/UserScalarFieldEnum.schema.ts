import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'email', 'passwordHash', 'createdAt', 'updatedAt'])