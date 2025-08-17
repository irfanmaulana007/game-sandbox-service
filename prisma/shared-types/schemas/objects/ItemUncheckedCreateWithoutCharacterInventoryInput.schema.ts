import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema'

export const ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema: z.ZodType<Prisma.ItemUncheckedCreateWithoutCharacterInventoryInput, Prisma.ItemUncheckedCreateWithoutCharacterInventoryInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional()
}).strict();
export const ItemUncheckedCreateWithoutCharacterInventoryInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional()
}).strict();
