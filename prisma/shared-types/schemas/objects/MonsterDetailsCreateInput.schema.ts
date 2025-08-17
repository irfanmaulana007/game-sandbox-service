import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { MonsterCreateNestedOneWithoutDetailsInputObjectSchema } from './MonsterCreateNestedOneWithoutDetailsInput.schema'

import { JsonValueSchema as jsonSchema } from './helpers/json-helpers';

export const MonsterDetailsCreateInputObjectSchema: z.ZodType<Prisma.MonsterDetailsCreateInput, Prisma.MonsterDetailsCreateInput> = z.object({
  rank: MonsterRankSchema,
  description: z.string().nullish(),
  imageUrl: z.string().nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.date().optional(),
  monster: z.lazy(() => MonsterCreateNestedOneWithoutDetailsInputObjectSchema)
}).strict();
export const MonsterDetailsCreateInputObjectZodSchema = z.object({
  rank: MonsterRankSchema,
  description: z.string().nullish(),
  imageUrl: z.string().nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.date().optional(),
  monster: z.lazy(() => MonsterCreateNestedOneWithoutDetailsInputObjectSchema)
}).strict();
