import { z } from 'zod';

export const CharacterEquipmentScalarFieldEnumSchema = z.enum(['id', 'characterId', 'equipmentId', 'slot', 'equippedAt'])