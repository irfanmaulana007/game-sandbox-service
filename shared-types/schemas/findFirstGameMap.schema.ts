import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapOrderByWithRelationInputObjectSchema } from './objects/GameMapOrderByWithRelationInput.schema';
import { GameMapWhereInputObjectSchema } from './objects/GameMapWhereInput.schema';
import { GameMapWhereUniqueInputObjectSchema } from './objects/GameMapWhereUniqueInput.schema';
import { GameMapScalarFieldEnumSchema } from './enums/GameMapScalarFieldEnum.schema';
import { MonsterArgsObjectSchema } from './objects/MonsterArgs.schema';
import { GameMapCountOutputTypeArgsObjectSchema } from './objects/GameMapCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GameMapFindFirstSelectSchema: z.ZodType<Prisma.GameMapSelect, Prisma.GameMapSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    minLevel: z.boolean().optional(),
    maxLevel: z.boolean().optional(),
    difficulty: z.boolean().optional(),
    backgroundImage: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    monsters: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GameMapFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    minLevel: z.boolean().optional(),
    maxLevel: z.boolean().optional(),
    difficulty: z.boolean().optional(),
    backgroundImage: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    monsters: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GameMapFindFirstSchema: z.ZodType<Prisma.GameMapFindFirstArgs, Prisma.GameMapFindFirstArgs> = z.object({ select: GameMapFindFirstSelectSchema.optional(), include: z.lazy(() => GameMapIncludeObjectSchema.optional()), orderBy: z.union([GameMapOrderByWithRelationInputObjectSchema, GameMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameMapWhereInputObjectSchema.optional(), cursor: GameMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameMapScalarFieldEnumSchema, GameMapScalarFieldEnumSchema.array()]).optional() }).strict();

export const GameMapFindFirstZodSchema = z.object({ select: GameMapFindFirstSelectSchema.optional(), include: z.lazy(() => GameMapIncludeObjectSchema.optional()), orderBy: z.union([GameMapOrderByWithRelationInputObjectSchema, GameMapOrderByWithRelationInputObjectSchema.array()]).optional(), where: GameMapWhereInputObjectSchema.optional(), cursor: GameMapWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GameMapScalarFieldEnumSchema, GameMapScalarFieldEnumSchema.array()]).optional() }).strict();