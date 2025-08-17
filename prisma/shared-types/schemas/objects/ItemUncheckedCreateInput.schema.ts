import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema';
import { CharacterInventoryUncheckedCreateNestedManyWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedCreateNestedManyWithoutItemInput.schema'

export const ItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateInput, Prisma.ItemUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional(),
  characterInventory: z.lazy(() => CharacterInventoryUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
export const ItemUncheckedCreateInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional(),
  characterInventory: z.lazy(() => CharacterInventoryUncheckedCreateNestedManyWithoutItemInputObjectSchema).optional()
}).strict();
