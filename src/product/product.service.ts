import { Injectable } from '@nestjs/common'
import { EnumProductType } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { SizeDto } from 'src/size/dto/size.dto'
import { ColorDto, ProductDto } from './dto/product.dto'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.product.findMany({
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})
	}

	async getById(id: string) {
		return this.prisma.product.findUnique({
			where: { id },
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})
	}

	async getByCategory(categoryId: string) {
		const data = await this.prisma.product.findMany({
			where: { categoryId },
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})

		if (!data) {
			throw new Error('Product type not found')
		}

		return data
	}

	async getByStyle(styleId: string) {
		const data = await this.prisma.product.findMany({
			where: { styleId },
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})

		if (!data) {
			throw new Error('Product type not found')
		}

		return data
	}

	async getByType(type: EnumProductType) {
		const data = await this.prisma.product.findMany({
			where: { type },
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})

		if (!data) {
			throw new Error('Product type not found')
		}

		return data
	}

	async create(dto: ProductDto, categoryId?: string) {
		const colorConnect =
			dto.colors?.map((color: ColorDto) => ({
				color: { connect: { id: color.id } }
			})) || []
		const sizeConnect =
			dto.sizes?.map((size: SizeDto) => ({
				size: { connect: { id: size.id } }
			})) || []

		return this.prisma.product.create({
			data: {
				name: dto.name,
				price: dto.price,
				brand: dto.brand,
				gender: dto.gender,
				images: dto.images,
				description: dto.description,
				productColors: { create: colorConnect },
				productSizes: { create: sizeConnect },
				categoryId,
				styleId: dto.styleId
			},
			include: {
				category: true,
				favorites: true,
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})
	}

	async update(id: string, dto: ProductDto) {
		await this.getById(id)

		const colorConnect =
			dto.colors?.map((color: ColorDto) => ({
				color: { connect: { id: color.id } }
			})) || []
		const sizeConnect =
			dto.sizes?.map((size: SizeDto) => ({
				size: { connect: { id: size.id } }
			})) || []

		return this.prisma.product.update({
			where: { id },
			data: {
				...dto,
				productColors: { deleteMany: {}, create: colorConnect },
				productSizes: { deleteMany: {}, create: sizeConnect }
			}
		})
	}

	async toggleFavorite(userId: string, productId: string) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
			include: { favorites: true }
		})

		const isExists = user.favorites.some(product => product.id === productId)

		await this.prisma.user.update({
			where: { id: user.id },
			data: {
				favorites: {
					[isExists ? 'disconnect' : 'connect']: {
						id: productId
					}
				}
			}
		})

		return { message: 'Success' }
	}

	async delete(id: string) {
		await this.getById(id)
		await this.prisma.product.delete({ where: { id } })
		return { message: 'Success' }
	}
}
