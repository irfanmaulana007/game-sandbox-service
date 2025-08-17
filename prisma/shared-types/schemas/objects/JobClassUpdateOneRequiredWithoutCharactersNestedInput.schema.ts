import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassCreateWithoutCharactersInputObjectSchema } from './JobClassCreateWithoutCharactersInput.schema';
import { JobClassUncheckedCreateWithoutCharactersInputObjectSchema } from './JobClassUncheckedCreateWithoutCharactersInput.schema';
import { JobClassCreateOrConnectWithoutCharactersInputObjectSchema } from './JobClassCreateOrConnectWithoutCharactersInput.schema';
import { JobClassUpsertWithoutCharactersInputObjectSchema } from './JobClassUpsertWithoutCharactersInput.schema';
import { JobClassWhereUniqueInputObjectSchema } from './JobClassWhereUniqueInput.schema';
import { JobClassUpdateToOneWithWhereWithoutCharactersInputObjectSchema } from './JobClassUpdateToOneWithWhereWithoutCharactersInput.schema';
import { JobClassUpdateWithoutCharactersInputObjectSchema } from './JobClassUpdateWithoutCharactersInput.schema';
import { JobClassUncheckedUpdateWithoutCharactersInputObjectSchema } from './JobClassUncheckedUpdateWithoutCharactersInput.schema'

export const JobClassUpdateOneRequiredWithoutCharactersNestedInputObjectSchema: z.ZodType<Prisma.JobClassUpdateOneRequiredWithoutCharactersNestedInput, Prisma.JobClassUpdateOneRequiredWithoutCharactersNestedInput> = z.object({
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobClassCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => JobClassUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => JobClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => JobClassUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUpdateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
export const JobClassUpdateOneRequiredWithoutCharactersNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobClassCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  upsert: z.lazy(() => JobClassUpsertWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => JobClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => JobClassUpdateToOneWithWhereWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUpdateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedUpdateWithoutCharactersInputObjectSchema)]).optional()
}).strict();
