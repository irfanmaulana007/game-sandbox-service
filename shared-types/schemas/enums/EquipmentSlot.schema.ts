import { z } from 'zod';

export const EquipmentSlotSchema = z.enum(['weapon', 'armor', 'accessory1', 'accessory2'])