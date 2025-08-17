import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumEquipmentSlotFilterObjectSchema } from './EnumEquipmentSlotFilter.schema';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const CharacterEquipmentScalarWhereInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentScalarWhereInput, Prisma.CharacterEquipmentScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  equipmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  slot: z.union([z.lazy(() => EnumEquipmentSlotFilterObjectSchema), EquipmentSlotSchema]).optional(),
  equippedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const CharacterEquipmentScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema), z.lazy(() => CharacterEquipmentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  equipmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  slot: z.union([z.lazy(() => EnumEquipmentSlotFilterObjectSchema), EquipmentSlotSchema]).optional(),
  equippedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
