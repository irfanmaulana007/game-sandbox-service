import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumEquipmentTypeWithAggregatesFilterObjectSchema } from './EnumEquipmentTypeWithAggregatesFilter.schema';
import { EquipmentTypeSchema } from '../enums/EquipmentType.schema';
import { EnumRarityWithAggregatesFilterObjectSchema } from './EnumRarityWithAggregatesFilter.schema';
import { RaritySchema } from '../enums/Rarity.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

export const EquipmentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EquipmentScalarWhereWithAggregatesInput, Prisma.EquipmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEquipmentTypeWithAggregatesFilterObjectSchema), EquipmentTypeSchema]).optional(),
  rarity: z.union([z.lazy(() => EnumRarityWithAggregatesFilterObjectSchema), RaritySchema]).optional(),
  minLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  healthBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  attackBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  defenseBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  speedBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  criticalBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  dropRate: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const EquipmentScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EquipmentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumEquipmentTypeWithAggregatesFilterObjectSchema), EquipmentTypeSchema]).optional(),
  rarity: z.union([z.lazy(() => EnumRarityWithAggregatesFilterObjectSchema), RaritySchema]).optional(),
  minLevel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  healthBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  attackBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  defenseBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  speedBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  criticalBonus: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  dropRate: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
