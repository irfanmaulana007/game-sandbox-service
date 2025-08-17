import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumEquipmentSlotWithAggregatesFilterObjectSchema } from './EnumEquipmentSlotWithAggregatesFilter.schema';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

export const CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentScalarWhereWithAggregatesInput, Prisma.CharacterEquipmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  equipmentId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  slot: z.union([z.lazy(() => EnumEquipmentSlotWithAggregatesFilterObjectSchema), EquipmentSlotSchema]).optional(),
  equippedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
export const CharacterEquipmentScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  equipmentId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  slot: z.union([z.lazy(() => EnumEquipmentSlotWithAggregatesFilterObjectSchema), EquipmentSlotSchema]).optional(),
  equippedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
