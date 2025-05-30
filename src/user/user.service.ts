import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UserPasswordDto } from './dto/user.password.dto'
import { UserUpdateDto } from './dto/user.update.dto'

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

	async updateProfile(userId: string, dto: UserUpdateDto) {
		const user = await this.getById(userId)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		if (dto.email) {
			const existingUser = await this.getByEmail(dto.email)

			if (existingUser && existingUser.id !== user.id) {
				throw new ConflictException('Email already exists')
			}
		}

		if (dto.email === user.email) {
			throw new ConflictException('Email is the same as current one')
		}

		if (dto.name && dto.name.length < 2) {
			throw new BadRequestException('Name must be at least 2 characters long')
		}

		if (dto.name === user.name) {
			throw new ConflictException('Name is the same as current one')
		}

		return this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				name: dto.name,
				email: dto.email
			}
		})
	}

	async changePassword(userId: string, dto: UserPasswordDto) {
		const user = await this.getById(userId)
		if (!user) {
			throw new NotFoundException('User not found')
		}

		if (dto.newPassword.length < 6) {
			throw new BadRequestException(
				'New password must be at least 6 characters long'
			)
		}

		if (dto.oldPassword === dto.newPassword) {
			throw new ConflictException('New password cannot be the same as old one')
		}

		const isPasswordValid = (await hash(dto.oldPassword)) === user.password

		if (!isPasswordValid) {
			throw new BadRequestException('Old password is incorrect')
		}
		return this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				password: await hash(dto.newPassword)
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
