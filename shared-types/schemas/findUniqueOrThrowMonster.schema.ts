import { z } from 'zod';
import { MonsterSelectObjectSchema } from './objects/MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterWhereUniqueInputObjectSchema } from './objects/MonsterWhereUniqueInput.schema'

export const MonsterFindUniqueOrThrowSchema = z.object({ select: MonsterSelectObjectSchema.optional(), include: MonsterIncludeObjectSchema.optional(), where: MonsterWhereUniqueInputObjectSchema })