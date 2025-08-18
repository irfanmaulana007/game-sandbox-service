import bcrypt from 'bcryptjs';
import { prisma } from '../../src/database/prisma';

export class UserSeeder {
  async seed(): Promise<void> {
    console.log('📚 Seeding users...');

    const users = [
      {
        username: 'irfanmaulana007',
        email: 'game.irfanmaulana007@gmail.com',
        password: 'asd123',
      },
    ];

    for (const user of users) {
      const passwordHash = await bcrypt.hash(user.password, 10);
      await prisma.user.create({
        data: {
          username: user.username,
          email: user.email,
          password_hash: passwordHash,
        },
      });
    }

    console.log('✅ Successfully seeded users');
  }
}
