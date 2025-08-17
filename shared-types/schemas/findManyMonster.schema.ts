import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterOrderByWithRelationInputObjectSchema } from './objects/MonsterOrderByWithRelationInput.schema';
import { MonsterWhereInputObjectSchema } from './objects/MonsterWhereInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './objects/MonsterWhereUniqueInput.schema';
import { MonsterScalarFieldEnumSchema } from './enums/MonsterScalarFieldEnum.schema';
import { GameMapArgsObjectSchema } from './objects/GameMapArgs.schema';
import { MonsterDetailsArgsObjectSchema } from './objects/MonsterDetailsArgs.schema';
import { BattleLogArgsObjectSchema } from './objects/BattleLogArgs.schema';
import { MonsterCountOutputTypeArgsObjectSchema } from './objects/MonsterCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MonsterFindManySelectSchema: z.ZodType<Prisma.MonsterSelect, Prisma.MonsterSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    level: z.boolean().optional(),
    health: z.boolean().optional(),
    attack: z.boolean().optional(),
    defense: z.boolean().optional(),
    speed: z.boolean().optional(),
    critical: z.boolean().optional(),
    experienceReward: z.boolean().optional(),
    goldReward: z.boolean().optional(),
    mapId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    map: z.boolean().optional(),
    details: z.boolean().optional(),
    battleLogs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MonsterFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    level: z.boolean().optional(),
    health: z.boolean().optional(),
    attack: z.boolean().optional(),
    defense: z.boolean().optional(),
    speed: z.boolean().optional(),
    critical: z.boolean().optional(),
    experienceReward: z.boolean().optional(),
    goldReward: z.boolean().optional(),
    mapId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    map: z.boolean().optional(),
    details: z.boolean().optional(),
    battleLogs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MonsterFindManySchema: z.ZodType<Prisma.MonsterFindManyArgs, Prisma.MonsterFindManyArgs> = z.object({ select: MonsterFindManySelectSchema.optional(), include: z.lazy(() => MonsterIncludeObjectSchema.optional()), orderBy: z.union([MonsterOrderByWithRelationInputObjectSchema, MonsterOrderByWithRelationInputObjectSchema.array()]).optional(), where: MonsterWhereInputObjectSchema.optional(), cursor: MonsterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MonsterScalarFieldEnumSchema, MonsterScalarFieldEnumSchema.array()]).optional() }).strict();

export const MonsterFindManyZodSchema = z.object({ select: MonsterFindManySelectSchema.optional(), include: z.lazy(() => MonsterIncludeObjectSchema.optional()), orderBy: z.union([MonsterOrderByWithRelationInputObjectSchema, MonsterOrderByWithRelationInputObjectSchema.array()]).optional(), where: MonsterWhereInputObjectSchema.optional(), cursor: MonsterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MonsterScalarFieldEnumSchema, MonsterScalarFieldEnumSchema.array()]).optional() }).strict();