import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema';
import { CharacterInventoryCreateNestedManyWithoutItemInputObjectSchema } from './CharacterInventoryCreateNestedManyWithoutItemInput.schema'

export const ItemCreateInputObjectSchema: z.ZodType<Prisma.ItemCreateInput, Prisma.ItemCreateInput> = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional(),
  characterInventory: z.lazy(() => CharacterInventoryCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemCreateInputObjectZodSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional(),
  characterInventory: z.lazy(() => CharacterInventoryCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
