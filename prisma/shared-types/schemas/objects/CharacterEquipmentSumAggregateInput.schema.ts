import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterEquipmentSumAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentSumAggregateInputType, Prisma.CharacterEquipmentSumAggregateInputType> = z.object({
  equipmentId: z.literal(true).optional()
}).strict();
export const CharacterEquipmentSumAggregateInputObjectZodSchema = z.object({
  equipmentId: z.literal(true).optional()
}).strict();
