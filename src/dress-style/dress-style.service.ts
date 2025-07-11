import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { dressStyleDto } from './dto/dress-style.dto'

@Injectable()
export class DressStyleService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.dressStyle.findMany({
			include: {
				products: true
			}
		})
	}

	async getById(id: string) {
		const category = await this.prisma.dressStyle.findUnique({
			where: {
				id
			},
			include: {
				products: true
			}
		})

		if (!category) throw new NotFoundException('Dress style not found')

		return category
	}

	async create(dto: dressStyleDto) {
		return this.prisma.dressStyle.create({
			data: {
				name: dto.name
			}
		})
	}

	async update(id: string, dto: dressStyleDto) {
		await this.getById(id)

		return this.prisma.dressStyle.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.dressStyle.delete({
			where: { id }
		})
	}
}
