import { z } from 'zod';
import { MonsterSelectObjectSchema } from './objects/MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterCreateInputObjectSchema } from './objects/MonsterCreateInput.schema';
import { MonsterUncheckedCreateInputObjectSchema } from './objects/MonsterUncheckedCreateInput.schema'

export const MonsterCreateOneSchema = z.object({ select: MonsterSelectObjectSchema.optional(), include: MonsterIncludeObjectSchema.optional(), data: z.union([MonsterCreateInputObjectSchema, MonsterUncheckedCreateInputObjectSchema])  })