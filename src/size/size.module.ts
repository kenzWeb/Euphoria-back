import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { SizeController } from './size.controller'
import { SizeService } from './size.service'

@Module({
	imports: [],
	controllers: [SizeController],
	providers: [SizeService, PrismaService]
})
export class SizeModule {}
