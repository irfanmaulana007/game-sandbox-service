import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema'

export const EnumMapDifficultyFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumMapDifficultyFieldUpdateOperationsInput, Prisma.EnumMapDifficultyFieldUpdateOperationsInput> = z.object({
  set: MapDifficultySchema.optional()
}).strict();
export const EnumMapDifficultyFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: MapDifficultySchema.optional()
}).strict();
