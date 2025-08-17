import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { EnumMonsterRankFieldUpdateOperationsInputObjectSchema } from './EnumMonsterRankFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { MonsterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema } from './MonsterUpdateOneRequiredWithoutDetailsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from './helpers/json-helpers';

export const MonsterDetailsUpdateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsUpdateInput, Prisma.MonsterDetailsUpdateInput> = z.object({
  rank: z.union([MonsterRankSchema, z.lazy(() => EnumMonsterRankFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  imageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  monster: z.lazy(() => MonsterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema).optional()
}).strict();
export const MonsterDetailsUpdateInputObjectZodSchema = z.object({
  rank: z.union([MonsterRankSchema, z.lazy(() => EnumMonsterRankFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  imageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  monster: z.lazy(() => MonsterUpdateOneRequiredWithoutDetailsNestedInputObjectSchema).optional()
}).strict();
