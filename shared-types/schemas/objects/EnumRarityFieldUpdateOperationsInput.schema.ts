import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RaritySchema } from '../enums/Rarity.schema'

export const EnumRarityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRarityFieldUpdateOperationsInput, Prisma.EnumRarityFieldUpdateOperationsInput> = z.object({
  set: RaritySchema.optional()
}).strict();
export const EnumRarityFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: RaritySchema.optional()
}).strict();
