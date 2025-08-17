import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapUpdateWithoutMonstersInputObjectSchema } from './GameMapUpdateWithoutMonstersInput.schema';
import { GameMapUncheckedUpdateWithoutMonstersInputObjectSchema } from './GameMapUncheckedUpdateWithoutMonstersInput.schema';
import { GameMapCreateWithoutMonstersInputObjectSchema } from './GameMapCreateWithoutMonstersInput.schema';
import { GameMapUncheckedCreateWithoutMonstersInputObjectSchema } from './GameMapUncheckedCreateWithoutMonstersInput.schema';
import { GameMapWhereInputObjectSchema } from './GameMapWhereInput.schema'

export const GameMapUpsertWithoutMonstersInputObjectSchema: z.ZodType<Prisma.GameMapUpsertWithoutMonstersInput, Prisma.GameMapUpsertWithoutMonstersInput> = z.object({
  update: z.union([z.lazy(() => GameMapUpdateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedUpdateWithoutMonstersInputObjectSchema)]),
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)]),
  where: z.lazy(() => GameMapWhereInputObjectSchema).optional()
}).strict();
export const GameMapUpsertWithoutMonstersInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => GameMapUpdateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedUpdateWithoutMonstersInputObjectSchema)]),
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)]),
  where: z.lazy(() => GameMapWhereInputObjectSchema).optional()
}).strict();
