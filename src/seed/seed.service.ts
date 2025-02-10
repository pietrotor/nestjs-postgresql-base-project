import { Injectable } from '@nestjs/common';
import { initialData } from './data/seed-data';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertUsers();

    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    await this.prisma.user.deleteMany();
  }

  private async insertUsers() {
    const seedUsers = initialData.users;

    this.prisma.user.createMany({
      data: seedUsers,
    });
  }
}
