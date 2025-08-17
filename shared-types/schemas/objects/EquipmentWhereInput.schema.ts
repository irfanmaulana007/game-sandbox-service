import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumEquipmentTypeFilterObjectSchema } from './EnumEquipmentTypeFilter.schema';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema';
import { EnumRarityFilterObjectSchema } from './EnumRarityFilter.schema';
import { RaritySchema } from '../enums/Rarity.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { CharacterEquipmentListRelationFilterObjectSchema } from './CharacterEquipmentListRelationFilter.schema'

export const EquipmentWhereInputObjectSchema: z.ZodType<Prisma.EquipmentWhereInput, Prisma.EquipmentWhereInput> = z.object({
  AND: z.union([z.lazy(() => EquipmentWhereInputObjectSchema), z.lazy(() => EquipmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EquipmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquipmentWhereInputObjectSchema), z.lazy(() => EquipmentWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEquipmentTypeFilterObjectSchema), EquipmentTypeSchema]).optional(),
  rarity: z.union([z.lazy(() => EnumRarityFilterObjectSchema), RaritySchema]).optional(),
  minLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  healthBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attackBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defenseBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speedBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  dropRate: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  characterEquipment: z.lazy(() => CharacterEquipmentListRelationFilterObjectSchema).optional()
}).strict();
export const EquipmentWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => EquipmentWhereInputObjectSchema), z.lazy(() => EquipmentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EquipmentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquipmentWhereInputObjectSchema), z.lazy(() => EquipmentWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEquipmentTypeFilterObjectSchema), EquipmentTypeSchema]).optional(),
  rarity: z.union([z.lazy(() => EnumRarityFilterObjectSchema), RaritySchema]).optional(),
  minLevel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  healthBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attackBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defenseBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speedBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalBonus: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  dropRate: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  characterEquipment: z.lazy(() => CharacterEquipmentListRelationFilterObjectSchema).optional()
}).strict();
