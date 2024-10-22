import { Injectable } from '@nestjs/common'
import { EnumGender } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { ProductDto } from './dto/product.dto'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.product.findMany({
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				colors: true,
				sizes: true,
				dressStyle: true
			}
		})
	}

	async getById(id: string) {
		return this.prisma.product.findUnique({
			where: {
				id
			},
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				colors: true,
				sizes: true,
				dressStyle: true
			}
		})
	}

	async create(categoryId: string, dto: ProductDto) {
		return this.prisma.product.create({
			data: {
				name: dto.name,
				price: dto.price,
				brand: dto.brand,
				gender: dto.gender as EnumGender,
				categoryId,
				styleId: dto.styleId
			},
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				colors: true,
				sizes: true,
				dressStyle: true
			}
		})
	}

	async update(id: string, dto: ProductDto) {
		await this.getById(id)

		return this.prisma.product.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		await this.getById(id)

		return this.prisma.product.delete({
			where: { id }
		})
	}

	async toggleFavorite(userId: string, productId: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: userId
			},
			include: {
				favorites: true
			}
		})

		const isExists = user.favorites.some(product => product.id === productId)

		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				favorites: {
					[isExists ? 'disconnect' : 'connect']: {
						id: productId
					}
				}
			}
		})

		return true
	}

	async getByCategory(categoryId: string) {
		return this.prisma.product.findMany({
			where: {
				categoryId
			}
		})
	}

	async getByStyle(styleId: string) {
		return this.prisma.product.findMany({
			where: {
				styleId
			}
		})
	}
}
