import { z } from 'zod';

export const JobClassScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'baseHealth', 'baseAttack', 'baseDefense', 'baseSpeed', 'baseCritical', 'healthPerLevel', 'attackPerLevel', 'defensePerLevel', 'speedPerLevel', 'criticalPerLevel'])