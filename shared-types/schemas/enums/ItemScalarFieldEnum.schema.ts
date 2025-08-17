import { z } from 'zod';

export const ItemScalarFieldEnumSchema = z.enum(['id', 'name', 'type', 'description', 'effectValue', 'rarity', 'dropRate', 'createdAt'])