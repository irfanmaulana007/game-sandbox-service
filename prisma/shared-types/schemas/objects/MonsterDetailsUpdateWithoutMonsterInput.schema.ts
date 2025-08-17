import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { EnumMonsterRankFieldUpdateOperationsInputObjectSchema } from './EnumMonsterRankFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from './helpers/json-helpers';

export const MonsterDetailsUpdateWithoutMonsterInputObjectSchema: z.ZodType<Prisma.MonsterDetailsUpdateWithoutMonsterInput, Prisma.MonsterDetailsUpdateWithoutMonsterInput> = z.object({
  rank: z.union([MonsterRankSchema, z.lazy(() => EnumMonsterRankFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  imageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const MonsterDetailsUpdateWithoutMonsterInputObjectZodSchema = z.object({
  rank: z.union([MonsterRankSchema, z.lazy(() => EnumMonsterRankFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  imageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
