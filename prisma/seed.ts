import {
  EquipmentSeeder,
  ExperienceLevelSeeder,
  ItemSeeder,
  JobClassSeeder,
  MapSeeder,
  MonsterSeeder,
  UserSeeder,
} from './seeders';
import type { SeederConfig } from './seeders/config';
import { defaultSeederConfig } from './seeders/config';

export class FakerSeeder {
  private userSeeder: UserSeeder;
  private jobClassSeeder: JobClassSeeder;
  private experienceLevelSeeder: ExperienceLevelSeeder;
  private mapSeeder: MapSeeder;
  private monsterSeeder: MonsterSeeder;
  private equipmentSeeder: EquipmentSeeder;
  private itemSeeder: ItemSeeder;

  constructor(config: SeederConfig = defaultSeederConfig) {
    this.userSeeder = new UserSeeder();
    this.jobClassSeeder = new JobClassSeeder();
    this.experienceLevelSeeder = new ExperienceLevelSeeder();
    this.mapSeeder = new MapSeeder();
    this.monsterSeeder = new MonsterSeeder(config);
    this.equipmentSeeder = new EquipmentSeeder(config);
    this.itemSeeder = new ItemSeeder(config);
  }

  async seedAll(): Promise<void> {
    console.log('🚀 Starting Faker-based database seeding...');

    try {
      // Seed in order to maintain referential integrity
      await this.jobClassSeeder.seed();
      await this.experienceLevelSeeder.seed();
      await this.userSeeder.seed();
      await this.mapSeeder.seed();
      await this.monsterSeeder.seed();
      await this.equipmentSeeder.seed();
      await this.itemSeeder.seed();

      console.log('🎉 All seeding completed successfully!');
    } catch (error) {
      console.error('❌ Seeding failed:', error);
      throw error;
    }
  }
}

// Export default instance
export const fakerSeeder = new FakerSeeder();

// Run seeder if this file is executed directly
if (require.main === module) {
  fakerSeeder
    .seedAll()
    .then(() => {
      console.log('✅ Faker seeding complete');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Faker seeding failed:', error);
      process.exit(1);
    });
}
