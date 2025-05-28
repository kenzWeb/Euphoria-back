import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				favorites: {
					include: {
						productColors: { include: { color: true } },
						productSizes: { include: { size: true } }
					}
				},
				orders: true,
				productColors: { include: { color: true } },
				productSizes: { include: { size: true } },
				shippingAddress: true
			}
		})

		return user
	}

	async getByEmail(email: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				email
			},
			include: {
				favorites: {
					include: {
						productColors: { include: { color: true } },
						productSizes: { include: { size: true } }
					}
				},
				orders: true,
				shippingAddress: true
			}
		})

		return user
	}

	async toggleFavorite(userId: string, productId: string) {
		const user = await this.getById(userId)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const isExists =
			user.favorites?.some(product => product.id === productId) || false

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
			},
			include: {
				favorites: {
					include: {
						productColors: { include: { color: true } },
						productSizes: { include: { size: true } }
					}
				},
				orders: true
			}
		})

		return {
			message: isExists ? 'Removed from favorites' : 'Added to favorites'
		}
	}

	async changeName(userId: string, name: string) {
		const user = await this.getById(userId)
		if (!user) {
			throw new NotFoundException('User not found')
		}
		return this.prisma.user.update({
			where: {
				id: userId
			},
			data: {
				name
			}
		})
	}

	async create(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				name: dto.name,
				email: dto.email,
				password: await hash(dto.password)
			}
		})
	}
}
