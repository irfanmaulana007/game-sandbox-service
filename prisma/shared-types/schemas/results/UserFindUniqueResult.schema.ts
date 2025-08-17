import { z } from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  characters: z.array(z.unknown())
}));