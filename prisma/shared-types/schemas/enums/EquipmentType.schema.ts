import { z } from 'zod';

export const EquipmentTypeSchema = z.enum(['weapon', 'armor', 'accessory'])