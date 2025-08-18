import { prisma } from '~/database/prisma';

export class JobClassesService {
  async getJobClasses(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [jobClasses, total] = await Promise.all([
      prisma.jobClass.findMany({
        skip,
        take: limit,
        orderBy: { id: 'asc' },
      }),
      prisma.jobClass.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      jobClasses,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    };
  }

  async getJobClassById(id: number) {
    const jobClass = await prisma.jobClass.findUnique({
      where: { id },
    });

    if (!jobClass) {
      throw new Error('Job class not found');
    }

    return jobClass;
  }

  async getJobClassByName(name: string) {
    const jobClass = await prisma.jobClass.findUnique({
      where: { name },
    });

    if (!jobClass) {
      throw new Error('Job class not found');
    }

    return jobClass;
  }
}
