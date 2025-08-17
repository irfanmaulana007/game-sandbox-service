import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MonsterRankSchema } from '../enums/MonsterRank.schema'

export const EnumMonsterRankFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumMonsterRankFieldUpdateOperationsInput, Prisma.EnumMonsterRankFieldUpdateOperationsInput> = z.object({
  set: MonsterRankSchema.optional()
}).strict();
export const EnumMonsterRankFieldUpdateOperationsInputObjectZodSchema = z.object({
  set: MonsterRankSchema.optional()
}).strict();
