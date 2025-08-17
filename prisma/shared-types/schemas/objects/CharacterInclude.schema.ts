import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { JobClassArgsObjectSchema } from './JobClassArgs.schema';
import { CharacterEquipmentFindManySchema } from '../findManyCharacterEquipment.schema';
import { CharacterInventoryFindManySchema } from '../findManyCharacterInventory.schema';
import { BattleLogFindManySchema } from '../findManyBattleLog.schema';
import { CharacterCountOutputTypeArgsObjectSchema } from './CharacterCountOutputTypeArgs.schema'

export const CharacterIncludeObjectSchema: z.ZodType<Prisma.CharacterInclude, Prisma.CharacterInclude> = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  job: z.union([z.boolean(), z.lazy(() => JobClassArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  inventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CharacterIncludeObjectZodSchema = z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  job: z.union([z.boolean(), z.lazy(() => JobClassArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  inventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
