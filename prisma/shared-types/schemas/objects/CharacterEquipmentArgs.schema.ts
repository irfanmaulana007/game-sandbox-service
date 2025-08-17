import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentSelectObjectSchema } from './CharacterEquipmentSelect.schema';
import { CharacterEquipmentIncludeObjectSchema } from './CharacterEquipmentInclude.schema'

export const CharacterEquipmentArgsObjectSchema = z.object({
  select: z.lazy(() => CharacterEquipmentSelectObjectSchema).optional(),
  include: z.lazy(() => CharacterEquipmentIncludeObjectSchema).optional()
}).strict();
export const CharacterEquipmentArgsObjectZodSchema = z.object({
  select: z.lazy(() => CharacterEquipmentSelectObjectSchema).optional(),
  include: z.lazy(() => CharacterEquipmentIncludeObjectSchema).optional()
}).strict();
