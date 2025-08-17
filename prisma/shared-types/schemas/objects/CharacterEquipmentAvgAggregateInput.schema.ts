import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterEquipmentAvgAggregateInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentAvgAggregateInputType, Prisma.CharacterEquipmentAvgAggregateInputType> = z.object({
  equipmentId: z.literal(true).optional()
}).strict();
export const CharacterEquipmentAvgAggregateInputObjectZodSchema = z.object({
  equipmentId: z.literal(true).optional()
}).strict();
