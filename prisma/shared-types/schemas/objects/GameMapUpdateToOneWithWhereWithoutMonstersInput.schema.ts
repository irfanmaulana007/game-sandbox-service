import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapWhereInputObjectSchema } from './GameMapWhereInput.schema';
import { GameMapUpdateWithoutMonstersInputObjectSchema } from './GameMapUpdateWithoutMonstersInput.schema';
import { GameMapUncheckedUpdateWithoutMonstersInputObjectSchema } from './GameMapUncheckedUpdateWithoutMonstersInput.schema'

export const GameMapUpdateToOneWithWhereWithoutMonstersInputObjectSchema: z.ZodType<Prisma.GameMapUpdateToOneWithWhereWithoutMonstersInput, Prisma.GameMapUpdateToOneWithWhereWithoutMonstersInput> = z.object({
  where: z.lazy(() => GameMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameMapUpdateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedUpdateWithoutMonstersInputObjectSchema)])
}).strict();
export const GameMapUpdateToOneWithWhereWithoutMonstersInputObjectZodSchema = z.object({
  where: z.lazy(() => GameMapWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameMapUpdateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedUpdateWithoutMonstersInputObjectSchema)])
}).strict();
