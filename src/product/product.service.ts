import { Injectable } from '@nestjs/common'
import { EnumGender, EnumProductType } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { SizeDto } from 'src/size/dto/size.dto'
import { EnumProductSort, FilterDto } from './dto/filter.dto'
import { ColorDto, ProductDto } from './dto/product.dto'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.product.findMany({
			include: {
				category: true,
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
				orderItems: true,
				dressStyle: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})
	}

	async getByCategory(category: string) {
		const data = await this.prisma.product.findMany({
			where: { category: { name: category } },
			include: {
				category: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})

		if (!data) {
			throw new Error('Product type not found')
		}

		return data
	}

	async getByCategoryId(categoryId: string) {
		const data = await this.prisma.product.findMany({
			where: { categoryId },
			include: {
				category: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } }
			}
		})

		if (!data) {
			throw new Error('Product type not found')
		}

		return data
	}

	async getByStyle(style: string) {
		const data = await this.prisma.product.findMany({
			where: { dressStyle: { name: style } },
			include: {
				category: true,
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
	async getByStyleId(styleId: string) {
		const data = await this.prisma.product.findMany({
			where: { styleId },
			include: {
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
				category: true
			}
		})

		if (!data) {
			throw new Error('Product type not found')
		}

		return data
	}

	async getByGender(gender: EnumGender) {
		const data = await this.prisma.product.findMany({
			where: { gender },
			include: {
				category: true
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
			}
		})
	}

	async getAllFiltered(dto: FilterDto) {
		const filters = []

		if (dto.category) filters.push({ category: { name: dto.category } })
		if (dto.categoryId) filters.push({ categoryId: dto.categoryId })
		if (dto.style) filters.push({ dressStyle: { name: dto.style } })
		if (dto.styleId) filters.push({ styleId: dto.styleId })
		if (dto.gender) filters.push({ gender: dto.gender })

		if (dto.minPrice || dto.maxPrice) {
			filters.push({
				price: {
					...(dto.minPrice ? { gte: +dto.minPrice } : {}),
					...(dto.maxPrice ? { lte: +dto.maxPrice } : {})
				}
			})
		}

		if (dto.colors) {
			filters.push({
				productColors: {
					some: {
						color: {
							OR: [
								{ id: { in: dto.colors } },
								{ name: { in: dto.colors, mode: 'insensitive' } }
							]
						}
					}
				}
			})
		}

		if (dto.sizes) {
			filters.push({
				productSizes: {
					some: {
						size: {
							OR: [
								{ id: { in: dto.sizes } },
								{ name: { in: dto.sizes, mode: 'insensitive' } }
							]
						}
					}
				}
			})
		}

		const orderBy = []

		switch (dto.sort) {
			case EnumProductSort.HIGH_PRICE:
				orderBy.push({ price: 'desc' })
				break
			case EnumProductSort.LOW_PRICE:
				orderBy.push({ price: 'asc' })
				break
			case EnumProductSort.NEWEST:
				orderBy.push({ createdAt: 'desc' })
				break
			case EnumProductSort.OLDEST:
				orderBy.push({ createdAt: 'asc' })
				break
		}

		return this.prisma.product.findMany({
			where: {
				AND: filters
			},
			orderBy,
			include: {
				category: true,
				dressStyle: true,
				orderItems: true,
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
			},
		})

		return { message: 'Success' }
	}

	async delete(id: string) {
		await this.getById(id)
		await this.prisma.product.delete({ where: { id } })
		return { message: 'Success' }
	}
}
