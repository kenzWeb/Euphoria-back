import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { SizeDto } from './dto/size.dto'

@Injectable()
export class SizeService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.size.findMany()
	}

	async getById(id: string) {
		const size = await this.prisma.size.findUnique({
			where: { id }
		})

		if (!size) throw new NotFoundException('Size not found')
		return size
	}

	async create(dto: SizeDto) {
		const isExists = await this.prisma.size.findFirst({
			where: { name: dto.name }
		})

		if (isExists) throw new BadRequestException('Size already exists')

		return this.prisma.size.create({
			data: {
				name: dto.name
			}
		})
	}

	async update(id: string, dto: SizeDto) {
		await this.getById(id)

		return this.prisma.size.update({
			where: { id },
			data: {
				name: dto.name
			}
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.size.delete({
			where: { id }
		})
	}
}
