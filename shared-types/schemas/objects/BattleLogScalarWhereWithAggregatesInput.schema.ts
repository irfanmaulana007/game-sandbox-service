import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumBattleResultWithAggregatesFilterObjectSchema } from './EnumBattleResultWithAggregatesFilter.schema';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

export const BattleLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BattleLogScalarWhereWithAggregatesInput, Prisma.BattleLogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  monsterId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  battleResult: z.union([z.lazy(() => EnumBattleResultWithAggregatesFilterObjectSchema), BattleResultSchema]).optional(),
  characterHealthRemaining: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  monsterHealthRemaining: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  turnsTaken: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  experienceGained: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  goldGained: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  battleDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
export const BattleLogScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BattleLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  monsterId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  battleResult: z.union([z.lazy(() => EnumBattleResultWithAggregatesFilterObjectSchema), BattleResultSchema]).optional(),
  characterHealthRemaining: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  monsterHealthRemaining: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  turnsTaken: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  experienceGained: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  goldGained: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  battleDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
