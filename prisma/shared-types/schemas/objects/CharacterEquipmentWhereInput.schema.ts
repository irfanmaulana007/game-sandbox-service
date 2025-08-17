import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumEquipmentSlotFilterObjectSchema } from './EnumEquipmentSlotFilter.schema';
import { EquipmentSlotSchema } from '../enums/EquipmentSlot.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterScalarRelationFilterObjectSchema } from './CharacterScalarRelationFilter.schema';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema';
import { EquipmentScalarRelationFilterObjectSchema } from './EquipmentScalarRelationFilter.schema';
import { EquipmentWhereInputObjectSchema } from './EquipmentWhereInput.schema'

export const CharacterEquipmentWhereInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentWhereInput, Prisma.CharacterEquipmentWhereInput> = z.object({
  AND: z.union([z.lazy(() => CharacterEquipmentWhereInputObjectSchema), z.lazy(() => CharacterEquipmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterEquipmentWhereInputObjectSchema), z.lazy(() => CharacterEquipmentWhereInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  equipmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  slot: z.union([z.lazy(() => EnumEquipmentSlotFilterObjectSchema), EquipmentSlotSchema]).optional(),
  equippedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional(),
  equipment: z.union([z.lazy(() => EquipmentScalarRelationFilterObjectSchema), z.lazy(() => EquipmentWhereInputObjectSchema)]).optional()
}).strict();
export const CharacterEquipmentWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterEquipmentWhereInputObjectSchema), z.lazy(() => CharacterEquipmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterEquipmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterEquipmentWhereInputObjectSchema), z.lazy(() => CharacterEquipmentWhereInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  equipmentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  slot: z.union([z.lazy(() => EnumEquipmentSlotFilterObjectSchema), EquipmentSlotSchema]).optional(),
  equippedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional(),
  equipment: z.union([z.lazy(() => EquipmentScalarRelationFilterObjectSchema), z.lazy(() => EquipmentWhereInputObjectSchema)]).optional()
}).strict();
