import { z } from 'zod';

export const EquipmentScalarFieldEnumSchema = z.enum(['id', 'name', 'type', 'rarity', 'minLevel', 'healthBonus', 'attackBonus', 'defenseBonus', 'speedBonus', 'criticalBonus', 'description', 'dropRate', 'createdAt'])