import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CharacterIncludeObjectSchema } from './objects/CharacterInclude.schema';
import { CharacterOrderByWithRelationInputObjectSchema } from './objects/CharacterOrderByWithRelationInput.schema';
import { CharacterWhereInputObjectSchema } from './objects/CharacterWhereInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './objects/CharacterWhereUniqueInput.schema';
import { CharacterScalarFieldEnumSchema } from './enums/CharacterScalarFieldEnum.schema';
import { UserArgsObjectSchema } from './objects/UserArgs.schema';
import { JobClassArgsObjectSchema } from './objects/JobClassArgs.schema';
import { CharacterEquipmentArgsObjectSchema } from './objects/CharacterEquipmentArgs.schema';
import { CharacterInventoryArgsObjectSchema } from './objects/CharacterInventoryArgs.schema';
import { BattleLogArgsObjectSchema } from './objects/BattleLogArgs.schema';
import { CharacterCountOutputTypeArgsObjectSchema } from './objects/CharacterCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CharacterFindFirstSelectSchema: z.ZodType<Prisma.CharacterSelect, Prisma.CharacterSelect> = z.object({
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
    user: z.boolean().optional(),
    job: z.boolean().optional(),
    equipment: z.boolean().optional(),
    inventory: z.boolean().optional(),
    battleLogs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CharacterFindFirstSelectZodSchema = z.object({
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
    user: z.boolean().optional(),
    job: z.boolean().optional(),
    equipment: z.boolean().optional(),
    inventory: z.boolean().optional(),
    battleLogs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const CharacterFindFirstSchema: z.ZodType<Prisma.CharacterFindFirstArgs, Prisma.CharacterFindFirstArgs> = z.object({ select: CharacterFindFirstSelectSchema.optional(), include: z.lazy(() => CharacterIncludeObjectSchema.optional()), orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterScalarFieldEnumSchema, CharacterScalarFieldEnumSchema.array()]).optional() }).strict();

export const CharacterFindFirstZodSchema = z.object({ select: CharacterFindFirstSelectSchema.optional(), include: z.lazy(() => CharacterIncludeObjectSchema.optional()), orderBy: z.union([CharacterOrderByWithRelationInputObjectSchema, CharacterOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterWhereInputObjectSchema.optional(), cursor: CharacterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterScalarFieldEnumSchema, CharacterScalarFieldEnumSchema.array()]).optional() }).strict();