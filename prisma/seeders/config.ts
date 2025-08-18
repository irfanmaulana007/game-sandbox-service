export interface SeederConfig {
  // Equipment generation
  equipment: {
    count: number;
    rarityDistribution: {
      common: number;
      uncommon: number;
      rare: number;
      epic: number;
      legendary: number;
    };
    typeDistribution: {
      weapon: number;
      armor: number;
      accessory: number;
    };
  };

  // Item generation
  items: {
    count: number;
    typeDistribution: {
      consumable: number;
      buff: number;
      special: number;
    };
    rarityDistribution: {
      common: number;
      uncommon: number;
      rare: number;
      epic: number;
      legendary: number;
    };
  };

  // Monster generation
  monsters: {
    count: number;
    levelRange: {
      min: number;
      max: number;
    };
    rankDistribution: {
      normal: number;
      elite: number;
      boss: number;
      legendary: number;
    };
  };

  // Map generation
  maps: {
    count: number;
    difficultyDistribution: {
      easy: number;
      normal: number;
      hard: number;
      extreme: number;
    };
  };
}

export const defaultSeederConfig: SeederConfig = {
  equipment: {
    count: 200,
    rarityDistribution: {
      common: 20,
      uncommon: 10,
      rare: 5,
      epic: 3,
      legendary: 1,
    },
    typeDistribution: {
      weapon: 40,
      armor: 40,
      accessory: 20,
    },
  },

  items: {
    count: 150,
    typeDistribution: {
      consumable: 40,
      buff: 35,
      special: 25,
    },
    rarityDistribution: {
      common: 45,
      uncommon: 30,
      rare: 15,
      epic: 8,
      legendary: 2,
    },
  },

  monsters: {
    count: 5,
    levelRange: {
      min: 1,
      max: 99,
    },
    rankDistribution: {
      normal: 60,
      elite: 25,
      boss: 12,
      legendary: 3,
    },
  },

  maps: {
    count: 15,
    difficultyDistribution: {
      easy: 40,
      normal: 30,
      hard: 20,
      extreme: 10,
    },
  },
};

// Helper function to get random item based on distribution
export function getRandomByDistribution<T>(distribution: { [key: string]: number }): T {
  const random = Math.random() * 100;
  let cumulative = 0;

  for (const [key, percentage] of Object.entries(distribution)) {
    cumulative += percentage;
    if (random <= cumulative) {
      return key as T;
    }
  }

  // Fallback to first item
  return Object.keys(distribution)[0] as T;
}

// Helper function to get random number in range
export function getRandomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to get random array item
export function getRandomArrayItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
