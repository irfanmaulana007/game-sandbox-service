import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema'

export const ItemCreateWithoutCharacterInventoryInputObjectSchema: z.ZodType<Prisma.ItemCreateWithoutCharacterInventoryInput, Prisma.ItemCreateWithoutCharacterInventoryInput> = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional()
}).strict();
export const ItemCreateWithoutCharacterInventoryInputObjectZodSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().nullish(),
  effectValue: z.number().int().nullish(),
  rarity: RaritySchema,
  dropRate: z.number().optional(),
  createdAt: z.date().optional()
}).strict();
