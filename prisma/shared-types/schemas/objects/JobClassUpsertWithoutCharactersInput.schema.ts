import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassUpdateWithoutCharactersInputObjectSchema } from './JobClassUpdateWithoutCharactersInput.schema';
import { JobClassUncheckedUpdateWithoutCharactersInputObjectSchema } from './JobClassUncheckedUpdateWithoutCharactersInput.schema';
import { JobClassCreateWithoutCharactersInputObjectSchema } from './JobClassCreateWithoutCharactersInput.schema';
import { JobClassUncheckedCreateWithoutCharactersInputObjectSchema } from './JobClassUncheckedCreateWithoutCharactersInput.schema';
import { JobClassWhereInputObjectSchema } from './JobClassWhereInput.schema'

export const JobClassUpsertWithoutCharactersInputObjectSchema: z.ZodType<Prisma.JobClassUpsertWithoutCharactersInput, Prisma.JobClassUpsertWithoutCharactersInput> = z.object({
  update: z.union([z.lazy(() => JobClassUpdateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => JobClassWhereInputObjectSchema).optional()
}).strict();
export const JobClassUpsertWithoutCharactersInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => JobClassUpdateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedUpdateWithoutCharactersInputObjectSchema)]),
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)]),
  where: z.lazy(() => JobClassWhereInputObjectSchema).optional()
}).strict();
