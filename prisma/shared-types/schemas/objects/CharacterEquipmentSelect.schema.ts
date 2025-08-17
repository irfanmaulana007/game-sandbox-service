import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema } from './CharacterArgs.schema';
import { EquipmentArgsObjectSchema } from './EquipmentArgs.schema'

export const CharacterEquipmentSelectObjectSchema: z.ZodType<Prisma.CharacterEquipmentSelect, Prisma.CharacterEquipmentSelect> = z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  equipmentId: z.boolean().optional(),
  slot: z.boolean().optional(),
  equippedAt: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => EquipmentArgsObjectSchema)]).optional()
}).strict();
export const CharacterEquipmentSelectObjectZodSchema = z.object({
  id: z.boolean().optional(),
  characterId: z.boolean().optional(),
  equipmentId: z.boolean().optional(),
  slot: z.boolean().optional(),
  equippedAt: z.boolean().optional(),
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional(),
  equipment: z.union([z.boolean(), z.lazy(() => EquipmentArgsObjectSchema)]).optional()
}).strict();
