# Equipment Seeder Changes Summary

## Overview

The equipment seeder has been updated to implement specific rules for legendary
and epic equipment generation, while maintaining the existing mechanism for
other rarities.

## Key Changes Made

### 1. Equipment Pricing

- **New Pricing Formula**: Equipment prices now depend on total attributes value
- **Health Multiplier**: Health points are valued 10x higher than other
  attributes
- **Formula**: `basePrice = level * 100 + totalAttributesValue * 5`
- **Total Attributes Value**: Sum of all attributes (health + attack + defense +
  speed + critical)

### 2. Attribute Distribution by Equipment Type

#### Weapon Equipment

- **Focus Attributes**: Attack (45%), Speed (25%), Critical (20%)
- **Secondary Attributes**: Health (5%), Defense (5%)
- **Purpose**: Optimized for offensive capabilities

#### Armor Equipment

- **Focus Attributes**: Health (45%), Defense (35%)
- **Secondary Attributes**: Critical (10%), Attack (5%), Speed (5%)
- **Purpose**: Optimized for defensive capabilities

#### Accessory Equipment

- **Balanced Attributes**: Health (20%), Attack (20%), Speed (25%), Critical
  (20%), Defense (15%)
- **Lower Total**: 60% of weapon/armor total attributes for same level and
  rarity
- **Purpose**: Provides balanced bonuses across all attributes

### 3. Special Equipment Generation Rules

#### Legendary Equipment

- **Levels**: 5, 10, 15, 20, 25, 30, 35, 40 (every 5 levels)
- **Per Level**: 1 weapon + 1 armor + 2 accessories
- **Total Count**: 8 levels × 4 items = 32 legendary items

#### Epic Equipment

- **Levels**: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 (every 4 levels)
- **Per Level**: 1 weapon + 1 armor + 2 accessories
- **Total Count**: 10 levels × 4 items = 40 epic items

### 4. Regular Equipment Generation

- **Rarities**: Common, Uncommon, Rare only
- **Count**: Remaining slots after special equipment allocation
- **Distribution**: Uses existing config distribution ratios
- **Levels**: Random levels between 1-40

## Technical Implementation

### Modified Methods

1. `seed()` - Split into special and regular equipment generation
2. `generateSpecialRarityEquipment()` - Handles legendary/epic generation
3. `generateEquipmentForLevel()` - Creates equipment for specific level/rarity
4. `calculateSpecialEquipmentCount()` - Calculates total special equipment
   needed
5. `calculatePrices()` - Updated to use total attributes value
6. `distributeAttributes()` - Updated weights for each equipment type
7. `calculateTotalBonus()` - Added type multiplier for accessories

### Configuration Impact

- The `equipment.count` in config now represents the total equipment count
- Special equipment (legendary/epic) is generated first
- Regular equipment fills the remaining slots
- If special equipment count exceeds config count, only special equipment is
  generated

## Example Output

### Legendary Weapon (Level 10)

- **Attributes**: Attack-focused with high speed and critical
- **Price**: Based on total attributes value (health × 10 + others)
- **Distribution**: ~45% attack, ~25% speed, ~20% critical

### Epic Armor (Level 16)

- **Attributes**: Health and defense focused
- **Price**: Higher due to high health values
- **Distribution**: ~45% health, ~35% defense

### Accessory (Any Level)

- **Attributes**: Balanced but lower total than weapon/armor
- **Price**: Lower due to reduced total attributes
- **Distribution**: Even spread across all attributes

## Benefits

1. **Predictable Progression**: Players know when to expect legendary/epic
   equipment
2. **Balanced Economy**: Prices reflect actual equipment value
3. **Clear Specialization**: Each equipment type has distinct purpose
4. **Scalable System**: Easy to adjust levels, rarities, and distributions
