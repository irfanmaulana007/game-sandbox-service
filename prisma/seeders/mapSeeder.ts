import { faker } from '@faker-js/faker';
import type { MapDifficulty } from '@prisma/client';
import { prisma } from '../../src/database/prisma';
import { getRandomInRange } from './config';

export class MapSeeder {
  async seed(): Promise<void> {
    console.log('🗺️ Seeding maps...');

    const mountains: {
      name: string;
      difficulty: MapDifficulty;
      zones: { name: string; description: string }[];
    }[] = [
      {
        name: 'Mt. Bromo',
        difficulty: 'easy',
        zones: [
          {
            name: 'Tumpang village',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Tosari village',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Ijen',
        difficulty: 'easy',
        zones: [
          {
            name: 'Banyuwangi',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Bondowoso',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Papandayan',
        difficulty: 'easy',
        zones: [
          {
            name: 'Ghober Hoet',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Hutan Mati',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Tegal Alun',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Tegal Panjang',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Andong',
        difficulty: 'easy',
        zones: [
          {
            name: 'Sawit',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Gogik',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Pendem',
            description: faker.lorem.paragraph(),
          },
        ],
      },

      {
        name: 'Mt. Prau',
        difficulty: 'normal',
        zones: [
          {
            name: 'Dieng',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Patak Banteng',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Dwarawati',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Kalilembu',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Igirmranak',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Wates',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Merbabu',
        difficulty: 'normal',
        zones: [
          {
            name: 'Selo',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Suwanting',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Wekas',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Thekelan',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Ciremai',
        difficulty: 'normal',
        zones: [
          {
            name: 'Apuy',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Linggarjati',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Palutungan',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Trisakti Sadarehe',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Lawu',
        difficulty: 'normal',
        zones: [
          {
            name: 'Candi Cetho',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Cemoro Sewu',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Cemoro Kandang',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Gede',
        difficulty: 'normal',
        zones: [
          {
            name: 'Gunung Putri',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Cibodas',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Salabintana',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Agung',
        difficulty: 'normal',
        zones: [
          {
            name: 'Pura Pasar Agung',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Besakih',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Edelweis',
            description: faker.lorem.paragraph(),
          },
        ],
      },

      {
        name: 'Mt. Semeru',
        difficulty: 'hard',
        zones: [
          {
            name: 'Ranu Pani',
            description: faker.lorem.paragraph(),
          },
        ],
      },

      {
        name: 'Mt. Rinjani',
        difficulty: 'hard',
        zones: [
          {
            name: 'Sembalun',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Senaru',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Torean',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Cikuray',
        difficulty: 'hard',
        zones: [
          {
            name: 'Pemancar',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Kiara Janggot',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Bayongbong',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Tapak Geurot',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Pamalayan',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Cinta Nagara',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Salak',
        difficulty: 'hard',
        zones: [
          {
            name: 'Cidahu',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Pasir Reungit',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'CImelati',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Ajisaka',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Kerinci',
        difficulty: 'hard',
        zones: [
          {
            name: 'Kersik Tuo',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Bukit Bontak',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Argopuro',
        difficulty: 'hard',
        zones: [
          {
            name: 'Baderan',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Bremi',
            description: faker.lorem.paragraph(),
          },
        ],
      },

      {
        name: 'Mt. Cartensz Pyramid',
        difficulty: 'extreme',
        zones: [
          {
            name: 'Kampung Dolinokogo',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Ilaga',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Sugapa',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Binaiya',
        difficulty: 'extreme',
        zones: [
          {
            name: 'Piliana',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Huaulu',
            description: faker.lorem.paragraph(),
          },
        ],
      },
      {
        name: 'Mt. Leuser',
        difficulty: 'extreme',
        zones: [
          {
            name: 'Kedah',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Agusan',
            description: faker.lorem.paragraph(),
          },
          {
            name: 'Meukek',
            description: faker.lorem.paragraph(),
          },
        ],
      },
    ];

    const mapLevelBasedOnDifficulty = {
      easy: {
        min: 4,
        max: 10,
      },
      normal: {
        min: 10,
        max: 20,
      },
      hard: {
        min: 20,
        max: 35,
      },
      extreme: {
        min: 35,
        max: 50,
      },
    };

    await prisma.gameMap.create({
      data: {
        name: 'Mt. Kembar',
        description: 'Mt. Kembar is a mountain in the mountains of Indonesia.',
        min_level: 1,
        max_level: 5,
        difficulty: 'easy',
        background_image: 'easy_bg_1.jpg',
      },
    });

    for (const mountain of mountains) {
      const difficulty = mountain.difficulty;

      const randomizeMinLevel =
        getRandomInRange(
          mapLevelBasedOnDifficulty[difficulty].min,
          mapLevelBasedOnDifficulty[difficulty].max
        ) / 2;
      const randomizeMaxLevel = getRandomInRange(
        mapLevelBasedOnDifficulty[difficulty].max / 2,
        mapLevelBasedOnDifficulty[difficulty].max
      );

      const minLevel = randomizeMinLevel || 1;
      const maxLevel = randomizeMaxLevel;

      const description = faker.lorem.paragraph();
      const backgroundImage = `${difficulty}_bg_${mountain.name}.jpg`;

      const map = await prisma.gameMap.create({
        data: {
          name: mountain.name,
          description,
          min_level: minLevel,
          max_level: maxLevel,
          difficulty,
          background_image: backgroundImage,
        },
      });

      for (const zone of mountain.zones) {
        await prisma.gameMapZone.create({
          data: {
            map_id: map.id,
            name: zone.name,
            description: zone.description,
          },
        });
      }
    }

    console.log('✅ Successfully seeded maps');
  }
}
