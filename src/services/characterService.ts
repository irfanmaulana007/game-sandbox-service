import { prisma } from '~/database/prisma';
import type { AllocateStatsRequest, Character, CreateCharacterRequest } from '~/types';

export class CharacterService {
  async getCharactersByUserId(userId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [total, characters] = await Promise.all([
      prisma.character.count({
        where: { user_id: userId },
      }),
      prisma.character.findMany({
        where: { user_id: userId },
        include: {
          job: true,
        },
        orderBy: { created_at: 'desc' },
        skip,
        take: limit,
      }),
    ]);

    return { characters, total };
  }

  async getCharacterByUserId(userId: string) {
    const character = await prisma.character.findFirst({
      where: { user_id: userId },
      include: {
        job: true,
      },
      orderBy: { created_at: 'desc' },
    });

    if (!character) {
      throw new Error('Character not found. Please create a character first.');
    }

    return character;
  }

  async createCharacter(userId: string, characterData: CreateCharacterRequest) {
    const { name, job_id } = characterData;

    // Get job class details
    const job = await prisma.jobClass.findUnique({
      where: { id: job_id },
    });

    if (!job) {
      throw new Error('Invalid job class');
    }

    // Check if character name already exists for this user
    const existingCharacter = await prisma.character.findFirst({
      where: {
        user_id: userId,
        name,
      },
    });

    if (existingCharacter) {
      throw new Error('Character name already exists');
    }

    // Create character with base stats
    const newCharacter = await prisma.character.create({
      data: {
        user_id: userId,
        name,
        job_id,
        level: 1,
        experience: 0,
        health: job.base_health,
        max_health: job.base_health,
        attack: job.base_attack,
        defense: job.base_defense,
        speed: job.base_speed,
        critical: job.base_critical,
        status_points: 0,
        gold: 0,
      },
    });

    return newCharacter;
  }

  async getCharacterById(id: string, userId: string) {
    const character = await prisma.character.findFirst({
      where: {
        id,
        user_id: userId,
      },
      include: {
        job: true,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    return character;
  }

  async updateCharacter(id: string, userId: string, name: string) {
    // Check if character exists and belongs to user
    const existingCharacter = await prisma.character.findFirst({
      where: {
        id,
        user_id: userId,
      },
    });

    if (!existingCharacter) {
      throw new Error('Character not found');
    }

    // Update character
    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: { name },
    });

    return updatedCharacter;
  }

  async deleteCharacter(id: string, userId: string) {
    // Check if character exists and belongs to user
    const existingCharacter = await prisma.character.findFirst({
      where: {
        id,
        user_id: userId,
      },
    });

    if (!existingCharacter) {
      throw new Error('Character not found');
    }

    // Delete character (cascade will handle related data)
    await prisma.character.delete({
      where: { id },
    });

    return true;
  }

  async allocateStats(id: string, userId: string, stats: AllocateStatsRequest) {
    const { health_points, attack_points, defense_points, speed_points, critical_points } = stats;

    // Check if character exists and belongs to user
    const char = await prisma.character.findFirst({
      where: {
        id,
        user_id: userId,
      },
    });

    if (!char) {
      throw new Error('Character not found');
    }

    const totalPoints =
      health_points + attack_points + defense_points + speed_points + critical_points;

    if (totalPoints > char.status_points) {
      throw new Error('Not enough status points available');
    }

    // Update character stats
    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: {
        health: { increment: health_points * 10 },
        max_health: { increment: health_points * 10 },
        attack: { increment: attack_points },
        defense: { increment: defense_points },
        speed: { increment: speed_points },
        critical: { increment: critical_points },
        status_points: { decrement: totalPoints },
      },
    });

    return updatedCharacter;
  }

  async restCharacter(id: string, userId: string) {
    const character = await this.getCharacterById(id, userId);

    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: {
        health: character.max_health,
      },
    });

    return updatedCharacter;
  }

  private async calculateStatusPoints(character: Character) {
    const baseJob = await prisma.jobClass.findUnique({
      where: { id: character.job_id },
    });

    if (!baseJob) {
      throw new Error('Job class not found');
    }

    const statusPoints =
      character.health / 10 +
      character.attack +
      character.defense +
      character.speed +
      character.critical;

    const baseStatusPoints =
      baseJob.base_health / 10 +
      baseJob.base_attack +
      baseJob.base_defense +
      baseJob.base_speed +
      baseJob.base_critical;

    const totalBonusStatusPointPerLevel =
      baseJob.health_per_level / 10 +
      baseJob.attack_per_level +
      baseJob.defense_per_level +
      baseJob.speed_per_level +
      baseJob.critical_per_level;

    console.log(
      '🚀 ~ CharacterService ~ calculateStatusPoints ~ totalBonusStatusPointPerLevel:',
      totalBonusStatusPointPerLevel
    );

    return (
      statusPoints -
      baseStatusPoints +
      character.status_points -
      totalBonusStatusPointPerLevel * character.level
    );
  }

  async resetCharacterStatusPoints(id: string, userId: string) {
    const character = await this.getCharacterById(id, userId);
    const statusPoints = await this.calculateStatusPoints(character);

    console.log('🚀 ~ CharacterService ~ resetCharacterStatusPoints ~ statusPoints:', statusPoints);

    if (!character) {
      throw new Error('Character not found');
    }

    const updatedCharacter = await prisma.character.update({
      where: { id },
      data: {
        status_points: statusPoints,
        health: character.job.base_health + character.job.health_per_level * character.level,
        max_health: character.job.base_health + character.job.health_per_level * character.level,
        attack: character.job.base_attack + character.job.attack_per_level * character.level,
        defense: character.job.base_defense + character.job.defense_per_level * character.level,
        speed: character.job.base_speed + character.job.speed_per_level * character.level,
        critical: character.job.base_critical + character.job.critical_per_level * character.level,
      },
    });

    return updatedCharacter;
  }

  async levelupCharacter(character_id: string) {
    const character = await prisma.character.findUnique({
      where: { id: character_id },
      include: {
        job: true,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    await prisma.character.update({
      where: { id: character_id },
      data: {
        level: character.level + 1,
        status_points: character.status_points + 1,
        max_health: character.max_health + character.job.health_per_level,
        attack: character.attack + character.job.attack_per_level,
        defense: character.defense + character.job.defense_per_level,
        speed: character.speed + character.job.speed_per_level,
        critical: character.critical + character.job.critical_per_level,
      },
    });
  }
}
