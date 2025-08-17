import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentWhereInputObjectSchema } from './CharacterEquipmentWhereInput.schema'

export const CharacterEquipmentListRelationFilterObjectSchema: z.ZodType<Prisma.CharacterEquipmentListRelationFilter, Prisma.CharacterEquipmentListRelationFilter> = z.object({
  every: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).optional()
}).strict();
export const CharacterEquipmentListRelationFilterObjectZodSchema = z.object({
  every: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).optional()
}).strict();
