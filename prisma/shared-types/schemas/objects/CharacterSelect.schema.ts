import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { JobClassArgsObjectSchema } from './JobClassArgs.schema';
import { CharacterEquipmentFindManySchema } from '../findManyCharacterEquipment.schema';
import { CharacterInventoryFindManySchema } from '../findManyCharacterInventory.schema';
import { BattleLogFindManySchema } from '../findManyBattleLog.schema';
import { CharacterCountOutputTypeArgsObjectSchema } from './CharacterCountOutputTypeArgs.schema'

export const CharacterSelectObjectSchema: z.ZodType<Prisma.CharacterSelect, Prisma.CharacterSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  name: z.boolean().optional(),
  jobId: z.boolean().optional(),
  level: z.boolean().optional(),
  experience: z.boolean().optional(),
  health: z.boolean().optional(),
  maxHealth: z.boolean().optional(),
  attack: z.boolean().optional(),
  defense: z.boolean().optional(),
  speed: z.boolean().optional(),
  critical: z.boolean().optional(),
  statusPoints: z.boolean().optional(),
  gold: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  job: z.union([z.boolean(), z.lazy(() => JobClassArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  inventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CharacterSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  name: z.boolean().optional(),
  jobId: z.boolean().optional(),
  level: z.boolean().optional(),
  experience: z.boolean().optional(),
  health: z.boolean().optional(),
  maxHealth: z.boolean().optional(),
  attack: z.boolean().optional(),
  defense: z.boolean().optional(),
  speed: z.boolean().optional(),
  critical: z.boolean().optional(),
  statusPoints: z.boolean().optional(),
  gold: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  job: z.union([z.boolean(), z.lazy(() => JobClassArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  inventory: z.union([z.boolean(), z.lazy(() => CharacterInventoryFindManySchema)]).optional(),
  battleLogs: z.union([z.boolean(), z.lazy(() => BattleLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CharacterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
