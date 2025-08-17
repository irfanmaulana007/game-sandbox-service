import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { JobClassScalarRelationFilterObjectSchema } from './JobClassScalarRelationFilter.schema';
import { JobClassWhereInputObjectSchema } from './JobClassWhereInput.schema';
import { CharacterEquipmentListRelationFilterObjectSchema } from './CharacterEquipmentListRelationFilter.schema';
import { CharacterInventoryListRelationFilterObjectSchema } from './CharacterInventoryListRelationFilter.schema';
import { BattleLogListRelationFilterObjectSchema } from './BattleLogListRelationFilter.schema'

export const CharacterWhereInputObjectSchema: z.ZodType<Prisma.CharacterWhereInput, Prisma.CharacterWhereInput> = z.object({
  AND: z.union([z.lazy(() => CharacterWhereInputObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterWhereInputObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experience: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  health: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxHealth: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  critical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  statusPoints: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  gold: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  job: z.union([z.lazy(() => JobClassScalarRelationFilterObjectSchema), z.lazy(() => JobClassWhereInputObjectSchema)]).optional(),
  equipment: z.lazy(() => CharacterEquipmentListRelationFilterObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryListRelationFilterObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogListRelationFilterObjectSchema).optional()
}).strict();
export const CharacterWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterWhereInputObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterWhereInputObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  experience: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  health: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxHealth: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  attack: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  defense: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  speed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  critical: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  statusPoints: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  gold: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  job: z.union([z.lazy(() => JobClassScalarRelationFilterObjectSchema), z.lazy(() => JobClassWhereInputObjectSchema)]).optional(),
  equipment: z.lazy(() => CharacterEquipmentListRelationFilterObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryListRelationFilterObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogListRelationFilterObjectSchema).optional()
}).strict();
