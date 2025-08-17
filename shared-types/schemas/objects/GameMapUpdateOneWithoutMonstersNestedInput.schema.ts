import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GameMapCreateWithoutMonstersInputObjectSchema } from './GameMapCreateWithoutMonstersInput.schema';
import { GameMapUncheckedCreateWithoutMonstersInputObjectSchema } from './GameMapUncheckedCreateWithoutMonstersInput.schema';
import { GameMapCreateOrConnectWithoutMonstersInputObjectSchema } from './GameMapCreateOrConnectWithoutMonstersInput.schema';
import { GameMapUpsertWithoutMonstersInputObjectSchema } from './GameMapUpsertWithoutMonstersInput.schema';
import { GameMapWhereInputObjectSchema } from './GameMapWhereInput.schema';
import { GameMapWhereUniqueInputObjectSchema } from './GameMapWhereUniqueInput.schema';
import { GameMapUpdateToOneWithWhereWithoutMonstersInputObjectSchema } from './GameMapUpdateToOneWithWhereWithoutMonstersInput.schema';
import { GameMapUpdateWithoutMonstersInputObjectSchema } from './GameMapUpdateWithoutMonstersInput.schema';
import { GameMapUncheckedUpdateWithoutMonstersInputObjectSchema } from './GameMapUncheckedUpdateWithoutMonstersInput.schema'

export const GameMapUpdateOneWithoutMonstersNestedInputObjectSchema: z.ZodType<Prisma.GameMapUpdateOneWithoutMonstersNestedInput, Prisma.GameMapUpdateOneWithoutMonstersNestedInput> = z.object({
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameMapCreateOrConnectWithoutMonstersInputObjectSchema).optional(),
  upsert: z.lazy(() => GameMapUpsertWithoutMonstersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameMapWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameMapWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameMapUpdateToOneWithWhereWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUpdateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedUpdateWithoutMonstersInputObjectSchema)]).optional()
}).strict();
export const GameMapUpdateOneWithoutMonstersNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => GameMapCreateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedCreateWithoutMonstersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameMapCreateOrConnectWithoutMonstersInputObjectSchema).optional(),
  upsert: z.lazy(() => GameMapUpsertWithoutMonstersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameMapWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameMapWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameMapWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameMapUpdateToOneWithWhereWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUpdateWithoutMonstersInputObjectSchema), z.lazy(() => GameMapUncheckedUpdateWithoutMonstersInputObjectSchema)]).optional()
}).strict();
