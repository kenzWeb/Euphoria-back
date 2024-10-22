import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DressStyleController } from './dress-style.controller'
import { DressStyleService } from './dress-style.service'

@Module({
	controllers: [DressStyleController],
	providers: [DressStyleService, PrismaService]
})
export class DressStyleModule {}
