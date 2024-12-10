import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ColorDto } from './dto/color.dto'

@Injectable()
export class ColorService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.color.findMany()
	}

	async getById(id: string) {
		const color = await this.prisma.color.findUnique({
			where: { id }
		})

		if (!color) throw new NotFoundException('Color not found')
		return color
	}

	async create(dto: ColorDto) {
		const isExists = await this.prisma.color.findFirst({
			where: { name: dto.name }
		})

		if (isExists) throw new BadRequestException('Color already exists')

		return this.prisma.color.create({
			data: {
				name: dto.name,
				value: dto.value
			}
		})
	}

	async update(id: string, dto: ColorDto) {
		await this.getById(id)

		return this.prisma.color.update({
			where: { id },
			data: {
				name: dto.name,
				value: dto.value
			}
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.color.delete({
			where: { id }
		})
	}
}
