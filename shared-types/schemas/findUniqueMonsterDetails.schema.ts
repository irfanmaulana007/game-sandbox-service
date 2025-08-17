import { z } from 'zod';
import { MonsterDetailsSelectObjectSchema } from './objects/MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './objects/MonsterDetailsWhereUniqueInput.schema'

export const MonsterDetailsFindUniqueSchema = z.object({ select: MonsterDetailsSelectObjectSchema.optional(), include: MonsterDetailsIncludeObjectSchema.optional(), where: MonsterDetailsWhereUniqueInputObjectSchema })