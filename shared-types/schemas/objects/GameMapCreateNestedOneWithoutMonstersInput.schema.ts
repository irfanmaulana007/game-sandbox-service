import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapCreateWithoutMonstersInputObjectSchema } from './GameMapCreateWithoutMonstersInput.schema';
import { GameMapUncheckedCreateWithoutMonstersInputObjectSchema } from './GameMapUncheckedCreateWithoutMonstersInput.schema';
import { GameMapCreateOrConnectWithoutMonstersInputObjectSchema } from './GameMapCreateOrConnectWithoutMonstersInput.schema';
import { GameMapWhereUniqueInputObjectSchema } from './GameMapWhereUniqueInput.schema'

export const GameMapCreateNestedOneWithoutMonstersInputObjectSchema: z.ZodType<Prisma.GameMapCreateNestedOneWithoutMonstersInput, Prisma.GameMapCreateNestedOneWithoutMonstersInput> = z.object({
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameMapCreateOrConnectWithoutMonstersInputObjectSchema).optional(),
  connect: z.lazy(() => GameMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameMapCreateNestedOneWithoutMonstersInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameMapCreateOrConnectWithoutMonstersInputObjectSchema).optional(),
  connect: z.lazy(() => GameMapWhereUniqueInputObjectSchema).optional()
}).strict();
