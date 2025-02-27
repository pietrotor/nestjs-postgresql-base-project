import { Module } from '@nestjs/common';

import { AuthModule } from './../auth/auth.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AuthModule, PrismaModule],
})
export class SeedModule {}
