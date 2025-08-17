import { z } from 'zod';

export const RaritySchema = z.enum(['common', 'uncommon', 'rare', 'epic', 'legendary'])