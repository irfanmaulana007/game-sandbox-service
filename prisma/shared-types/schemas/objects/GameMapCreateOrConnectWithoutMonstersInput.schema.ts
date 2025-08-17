import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapWhereUniqueInputObjectSchema } from './GameMapWhereUniqueInput.schema';
import { GameMapCreateWithoutMonstersInputObjectSchema } from './GameMapCreateWithoutMonstersInput.schema';
import { GameMapUncheckedCreateWithoutMonstersInputObjectSchema } from './GameMapUncheckedCreateWithoutMonstersInput.schema'

export const GameMapCreateOrConnectWithoutMonstersInputObjectSchema: z.ZodType<Prisma.GameMapCreateOrConnectWithoutMonstersInput, Prisma.GameMapCreateOrConnectWithoutMonstersInput> = z.object({
  where: z.lazy(() => GameMapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)])
}).strict();
export const GameMapCreateOrConnectWithoutMonstersInputObjectZodSchema = z.object({
  where: z.lazy(() => GameMapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)])
}).strict();
