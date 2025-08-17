import { z } from 'zod';
import { MonsterSelectObjectSchema } from './objects/MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterUpdateInputObjectSchema } from './objects/MonsterUpdateInput.schema';
import { MonsterUncheckedUpdateInputObjectSchema } from './objects/MonsterUncheckedUpdateInput.schema';
import { MonsterWhereUniqueInputObjectSchema } from './objects/MonsterWhereUniqueInput.schema'

export const MonsterUpdateOneSchema = z.object({ select: MonsterSelectObjectSchema.optional(), include: MonsterIncludeObjectSchema.optional(), data: z.union([MonsterUpdateInputObjectSchema, MonsterUncheckedUpdateInputObjectSchema]), where: MonsterWhereUniqueInputObjectSchema  })