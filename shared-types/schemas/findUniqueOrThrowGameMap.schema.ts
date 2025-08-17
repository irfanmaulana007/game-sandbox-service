import { z } from 'zod';
import { GameMapSelectObjectSchema } from './objects/GameMapSelect.schema';
import { GameMapIncludeObjectSchema } from './objects/GameMapInclude.schema';
import { GameMapWhereUniqueInputObjectSchema } from './objects/GameMapWhereUniqueInput.schema'

export const GameMapFindUniqueOrThrowSchema = z.object({ select: GameMapSelectObjectSchema.optional(), include: GameMapIncludeObjectSchema.optional(), where: GameMapWhereUniqueInputObjectSchema })