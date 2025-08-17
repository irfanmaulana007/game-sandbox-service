import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BattleLogIncludeObjectSchema } from './objects/BattleLogInclude.schema';
import { BattleLogOrderByWithRelationInputObjectSchema } from './objects/BattleLogOrderByWithRelationInput.schema';
import { BattleLogWhereInputObjectSchema } from './objects/BattleLogWhereInput.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './objects/BattleLogWhereUniqueInput.schema';
import { BattleLogScalarFieldEnumSchema } from './enums/BattleLogScalarFieldEnum.schema';
import { CharacterArgsObjectSchema } from './objects/CharacterArgs.schema';
import { MonsterArgsObjectSchema } from './objects/MonsterArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BattleLogFindManySelectSchema: z.ZodType<Prisma.BattleLogSelect, Prisma.BattleLogSelect> = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    monsterId: z.boolean().optional(),
    battleResult: z.boolean().optional(),
    characterHealthRemaining: z.boolean().optional(),
    monsterHealthRemaining: z.boolean().optional(),
    turnsTaken: z.boolean().optional(),
    experienceGained: z.boolean().optional(),
    goldGained: z.boolean().optional(),
    battleDate: z.boolean().optional(),
    character: z.boolean().optional(),
    monster: z.boolean().optional()
  }).strict();

export const BattleLogFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    monsterId: z.boolean().optional(),
    battleResult: z.boolean().optional(),
    characterHealthRemaining: z.boolean().optional(),
    monsterHealthRemaining: z.boolean().optional(),
    turnsTaken: z.boolean().optional(),
    experienceGained: z.boolean().optional(),
    goldGained: z.boolean().optional(),
    battleDate: z.boolean().optional(),
    character: z.boolean().optional(),
    monster: z.boolean().optional()
  }).strict();

export const BattleLogFindManySchema: z.ZodType<Prisma.BattleLogFindManyArgs, Prisma.BattleLogFindManyArgs> = z.object({ select: BattleLogFindManySelectSchema.optional(), include: z.lazy(() => BattleLogIncludeObjectSchema.optional()), orderBy: z.union([BattleLogOrderByWithRelationInputObjectSchema, BattleLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BattleLogWhereInputObjectSchema.optional(), cursor: BattleLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BattleLogScalarFieldEnumSchema, BattleLogScalarFieldEnumSchema.array()]).optional() }).strict();

export const BattleLogFindManyZodSchema = z.object({ select: BattleLogFindManySelectSchema.optional(), include: z.lazy(() => BattleLogIncludeObjectSchema.optional()), orderBy: z.union([BattleLogOrderByWithRelationInputObjectSchema, BattleLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BattleLogWhereInputObjectSchema.optional(), cursor: BattleLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BattleLogScalarFieldEnumSchema, BattleLogScalarFieldEnumSchema.array()]).optional() }).strict();