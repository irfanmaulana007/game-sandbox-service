import { prisma } from '~/database/prisma';
import type { AllocateStatsRequest, CreateCharacterRequest } from '~/types';

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
}
