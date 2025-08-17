import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassWhereInputObjectSchema } from './JobClassWhereInput.schema';
import { JobClassUpdateWithoutCharactersInputObjectSchema } from './JobClassUpdateWithoutCharactersInput.schema';
import { JobClassUncheckedUpdateWithoutCharactersInputObjectSchema } from './JobClassUncheckedUpdateWithoutCharactersInput.schema'

export const JobClassUpdateToOneWithWhereWithoutCharactersInputObjectSchema: z.ZodType<Prisma.JobClassUpdateToOneWithWhereWithoutCharactersInput, Prisma.JobClassUpdateToOneWithWhereWithoutCharactersInput> = z.object({
  where: z.lazy(() => JobClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => JobClassUpdateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
export const JobClassUpdateToOneWithWhereWithoutCharactersInputObjectZodSchema = z.object({
  where: z.lazy(() => JobClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => JobClassUpdateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedUpdateWithoutCharactersInputObjectSchema)])
}).strict();
