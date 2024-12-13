import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ArrivalController } from './arrival.controller'
import { ArrivalService } from './arrival.service'

@Module({
	controllers: [ArrivalController],
	providers: [ArrivalService, PrismaService]
})
export class ArrivalModule {}
