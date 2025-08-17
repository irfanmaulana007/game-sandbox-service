import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumBattleResultFilterObjectSchema } from './EnumBattleResultFilter.schema';
import { BattleResultSchema } from '../enums/BattleResult.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { CharacterScalarRelationFilterObjectSchema } from './CharacterScalarRelationFilter.schema';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema';
import { MonsterScalarRelationFilterObjectSchema } from './MonsterScalarRelationFilter.schema';
import { MonsterWhereInputObjectSchema } from './MonsterWhereInput.schema'

export const BattleLogWhereInputObjectSchema: z.ZodType<Prisma.BattleLogWhereInput, Prisma.BattleLogWhereInput> = z.object({
  AND: z.union([z.lazy(() => BattleLogWhereInputObjectSchema), z.lazy(() => BattleLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BattleLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BattleLogWhereInputObjectSchema), z.lazy(() => BattleLogWhereInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  monsterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleResult: z.union([z.lazy(() => EnumBattleResultFilterObjectSchema), BattleResultSchema]).optional(),
  characterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  monsterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  turnsTaken: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experienceGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  goldGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional(),
  monster: z.union([z.lazy(() => MonsterScalarRelationFilterObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema)]).optional()
}).strict();
export const BattleLogWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => BattleLogWhereInputObjectSchema), z.lazy(() => BattleLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BattleLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BattleLogWhereInputObjectSchema), z.lazy(() => BattleLogWhereInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  monsterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleResult: z.union([z.lazy(() => EnumBattleResultFilterObjectSchema), BattleResultSchema]).optional(),
  characterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  monsterHealthRemaining: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  turnsTaken: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experienceGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  goldGained: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  battleDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional(),
  monster: z.union([z.lazy(() => MonsterScalarRelationFilterObjectSchema), z.lazy(() => MonsterWhereInputObjectSchema)]).optional()
}).strict();
