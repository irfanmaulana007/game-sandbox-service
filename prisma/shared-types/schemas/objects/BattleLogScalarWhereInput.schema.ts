import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumBattleResultFilterObjectSchema } from './EnumBattleResultFilter.schema';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const BattleLogScalarWhereInputObjectSchema: z.ZodType<Prisma.BattleLogScalarWhereInput, Prisma.BattleLogScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BattleLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  monsterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleResult: z.union([z.lazy(() => EnumBattleResultFilterObjectSchema), BattleResultSchema]).optional(),
  characterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  monsterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  turnsTaken: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experienceGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  goldGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const BattleLogScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BattleLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BattleLogScalarWhereInputObjectSchema), z.lazy(() => BattleLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  monsterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleResult: z.union([z.lazy(() => EnumBattleResultFilterObjectSchema), BattleResultSchema]).optional(),
  characterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  monsterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  turnsTaken: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experienceGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  goldGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
