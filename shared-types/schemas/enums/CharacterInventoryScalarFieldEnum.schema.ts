import { z } from 'zod';

export const CharacterInventoryScalarFieldEnumSchema = z.enum(['id', 'characterId', 'itemId', 'quantity', 'createdAt'])