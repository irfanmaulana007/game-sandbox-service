import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema } from './CharacterArgs.schema';
import { EquipmentArgsObjectSchema } from './EquipmentArgs.schema'

export const CharacterEquipmentIncludeObjectSchema: z.ZodType<Prisma.CharacterEquipmentInclude, Prisma.CharacterEquipmentInclude> = z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => EquipmentArgsObjectSchema)]).optional()
}).strict();
export const CharacterEquipmentIncludeObjectZodSchema = z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => EquipmentArgsObjectSchema)]).optional()
}).strict();
