import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EquipmentIncludeObjectSchema } from './objects/EquipmentInclude.schema';
import { EquipmentOrderByWithRelationInputObjectSchema } from './objects/EquipmentOrderByWithRelationInput.schema';
import { EquipmentWhereInputObjectSchema } from './objects/EquipmentWhereInput.schema';
import { EquipmentWhereUniqueInputObjectSchema } from './objects/EquipmentWhereUniqueInput.schema';
import { EquipmentScalarFieldEnumSchema } from './enums/EquipmentScalarFieldEnum.schema';
import { CharacterEquipmentArgsObjectSchema } from './objects/CharacterEquipmentArgs.schema';
import { EquipmentCountOutputTypeArgsObjectSchema } from './objects/EquipmentCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EquipmentFindManySelectSchema: z.ZodType<Prisma.EquipmentSelect, Prisma.EquipmentSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    rarity: z.boolean().optional(),
    minLevel: z.boolean().optional(),
    healthBonus: z.boolean().optional(),
    attackBonus: z.boolean().optional(),
    defenseBonus: z.boolean().optional(),
    speedBonus: z.boolean().optional(),
    criticalBonus: z.boolean().optional(),
    description: z.boolean().optional(),
    dropRate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    characterEquipment: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EquipmentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    rarity: z.boolean().optional(),
    minLevel: z.boolean().optional(),
    healthBonus: z.boolean().optional(),
    attackBonus: z.boolean().optional(),
    defenseBonus: z.boolean().optional(),
    speedBonus: z.boolean().optional(),
    criticalBonus: z.boolean().optional(),
    description: z.boolean().optional(),
    dropRate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    characterEquipment: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EquipmentFindManySchema: z.ZodType<Prisma.EquipmentFindManyArgs, Prisma.EquipmentFindManyArgs> = z.object({ select: EquipmentFindManySelectSchema.optional(), include: z.lazy(() => EquipmentIncludeObjectSchema.optional()), orderBy: z.union([EquipmentOrderByWithRelationInputObjectSchema, EquipmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: EquipmentWhereInputObjectSchema.optional(), cursor: EquipmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EquipmentScalarFieldEnumSchema, EquipmentScalarFieldEnumSchema.array()]).optional() }).strict();

export const EquipmentFindManyZodSchema = z.object({ select: EquipmentFindManySelectSchema.optional(), include: z.lazy(() => EquipmentIncludeObjectSchema.optional()), orderBy: z.union([EquipmentOrderByWithRelationInputObjectSchema, EquipmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: EquipmentWhereInputObjectSchema.optional(), cursor: EquipmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EquipmentScalarFieldEnumSchema, EquipmentScalarFieldEnumSchema.array()]).optional() }).strict();