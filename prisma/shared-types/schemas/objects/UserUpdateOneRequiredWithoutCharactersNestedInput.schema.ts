import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCharactersInputObjectSchema } from './UserCreateWithoutCharactersInput.schema';
import { UserUncheckedCreateWithoutCharactersInputObjectSchema } from './UserUncheckedCreateWithoutCharactersInput.schema';
import { UserCreateOrConnectWithoutCharactersInputObjectSchema } from './UserCreateOrConnectWithoutCharactersInput.schema';
import { UserUpsertWithoutCharactersInputObjectSchema } from './UserUpsertWithoutCharactersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCharactersInput.schema';
import { UserUpdateWithoutCharactersInputObjectSchema } from './UserUpdateWithoutCharactersInput.schema';
import { UserUncheckedUpdateWithoutCharactersInputObjectSchema } from './UserUncheckedUpdateWithoutCharactersInput.schema'

export const UserUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput, Prisma.UserUpdateOneRequiredWithoutCharactersNestedInput> = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => UserUpdateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => UserUpdateWithoutCharactersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
