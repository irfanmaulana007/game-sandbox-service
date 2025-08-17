import { z } from 'zod';
import { CharacterInventorySelectObjectSchema } from './objects/CharacterInventorySelect.schema';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './objects/CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryCreateInputObjectSchema } from './objects/CharacterInventoryCreateInput.schema';
import { CharacterInventoryUncheckedCreateInputObjectSchema } from './objects/CharacterInventoryUncheckedCreateInput.schema';
import { CharacterInventoryUpdateInputObjectSchema } from './objects/CharacterInventoryUpdateInput.schema';
import { CharacterInventoryUncheckedUpdateInputObjectSchema } from './objects/CharacterInventoryUncheckedUpdateInput.schema'

export const CharacterInventoryUpsertSchema = z.object({ select: CharacterInventorySelectObjectSchema.optional(), include: CharacterInventoryIncludeObjectSchema.optional(), where: CharacterInventoryWhereUniqueInputObjectSchema, create: z.union([ CharacterInventoryCreateInputObjectSchema, CharacterInventoryUncheckedCreateInputObjectSchema ]), update: z.union([ CharacterInventoryUpdateInputObjectSchema, CharacterInventoryUncheckedUpdateInputObjectSchema ])  })