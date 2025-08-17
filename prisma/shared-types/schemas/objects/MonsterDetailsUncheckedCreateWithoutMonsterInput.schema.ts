import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from './helpers/json-helpers';

export const MonsterDetailsUncheckedCreateWithoutMonsterInputObjectSchema: z.ZodType<Prisma.MonsterDetailsUncheckedCreateWithoutMonsterInput, Prisma.MonsterDetailsUncheckedCreateWithoutMonsterInput> = z.object({
  id: z.number().int().optional(),
  rank: MonsterRankSchema,
  description: z.string().nullish(),
  imageUrl: z.string().nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.date().optional()
}).strict();
export const MonsterDetailsUncheckedCreateWithoutMonsterInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  rank: MonsterRankSchema,
  description: z.string().nullish(),
  imageUrl: z.string().nullish(),
  dropTable: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.date().optional()
}).strict();
