import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CharacterEquipmentIncludeObjectSchema } from './objects/CharacterEquipmentInclude.schema';
import { CharacterEquipmentOrderByWithRelationInputObjectSchema } from './objects/CharacterEquipmentOrderByWithRelationInput.schema';
import { CharacterEquipmentWhereInputObjectSchema } from './objects/CharacterEquipmentWhereInput.schema';
import { CharacterEquipmentWhereUniqueInputObjectSchema } from './objects/CharacterEquipmentWhereUniqueInput.schema';
import { CharacterEquipmentScalarFieldEnumSchema } from './enums/CharacterEquipmentScalarFieldEnum.schema';
import { CharacterArgsObjectSchema } from './objects/CharacterArgs.schema';
import { EquipmentArgsObjectSchema } from './objects/EquipmentArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CharacterEquipmentFindFirstOrThrowSelectSchema: z.ZodType<Prisma.CharacterEquipmentSelect, Prisma.CharacterEquipmentSelect> = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    equipmentId: z.boolean().optional(),
    slot: z.boolean().optional(),
    equippedAt: z.boolean().optional(),
    character: z.boolean().optional(),
    equipment: z.boolean().optional()
  }).strict();

export const CharacterEquipmentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    equipmentId: z.boolean().optional(),
    slot: z.boolean().optional(),
    equippedAt: z.boolean().optional(),
    character: z.boolean().optional(),
    equipment: z.boolean().optional()
  }).strict();

export const CharacterEquipmentFindFirstOrThrowSchema: z.ZodType<Prisma.CharacterEquipmentFindFirstOrThrowArgs, Prisma.CharacterEquipmentFindFirstOrThrowArgs> = z.object({ select: CharacterEquipmentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CharacterEquipmentIncludeObjectSchema.optional()), orderBy: z.union([CharacterEquipmentOrderByWithRelationInputObjectSchema, CharacterEquipmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterEquipmentWhereInputObjectSchema.optional(), cursor: CharacterEquipmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterEquipmentScalarFieldEnumSchema, CharacterEquipmentScalarFieldEnumSchema.array()]).optional() }).strict();

export const CharacterEquipmentFindFirstOrThrowZodSchema = z.object({ select: CharacterEquipmentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => CharacterEquipmentIncludeObjectSchema.optional()), orderBy: z.union([CharacterEquipmentOrderByWithRelationInputObjectSchema, CharacterEquipmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterEquipmentWhereInputObjectSchema.optional(), cursor: CharacterEquipmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterEquipmentScalarFieldEnumSchema, CharacterEquipmentScalarFieldEnumSchema.array()]).optional() }).strict();