import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ColorDto } from './dto/color.dto'

@Injectable()
export class ColorService {
	constructor(private prisma: PrismaService) {}

	async getById(id: string) {
		const color = this.prisma.color.findMany({
			where: {
				id
			}
		})

		if (!color) throw new NotFoundException('Color not found')

		return color
	}

	async create(dto: ColorDto) {
		return this.prisma.color.create({
			data: {
				name: dto.name,
				value: dto.value
			}
		})
	}

	async update(id: string, dto: ColorDto) {
		return this.prisma.color.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				value: dto.value
			}
		})
	}

	async delete(id: string) {
		return this.prisma.color.delete({
			where: {
				id
			}
		})
	}
}
