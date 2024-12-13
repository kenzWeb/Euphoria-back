import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ZoneController } from './zone.controller'
import { ZoneService } from './zone.service'

@Module({
	controllers: [ZoneController],
	providers: [ZoneService, PrismaService]
})
export class ZoneModule {}
