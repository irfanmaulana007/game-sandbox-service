import { z } from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    username: z.number(),
    email: z.number(),
    passwordHash: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    characters: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    passwordHash: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    passwordHash: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});