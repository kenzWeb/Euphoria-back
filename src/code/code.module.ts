import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from 'src/prisma.service'
import { CodeController } from './code.controller'
import { CodeService } from './code.service'

@Module({
	imports: [ConfigModule],
	controllers: [CodeController],
	providers: [CodeService, PrismaService]
})
export class CodeModule {}
