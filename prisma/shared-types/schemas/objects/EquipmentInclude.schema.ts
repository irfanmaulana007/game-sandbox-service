import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentFindManySchema } from '../findManyCharacterEquipment.schema';
import { EquipmentCountOutputTypeArgsObjectSchema } from './EquipmentCountOutputTypeArgs.schema'

export const EquipmentIncludeObjectSchema: z.ZodType<Prisma.EquipmentInclude, Prisma.EquipmentInclude> = z.object({
  characterEquipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EquipmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EquipmentIncludeObjectZodSchema = z.object({
  characterEquipment: z.union([z.boolean(), z.lazy(() => CharacterEquipmentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EquipmentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
