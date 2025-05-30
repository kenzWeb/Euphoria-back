import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ShippingAddressDto } from './dto/shipping-address.dto'

@Injectable()
export class ShippingAddressService {
	constructor(private readonly prisma: PrismaService) {}

	async getByUserId(userId: string) {
		const addresses = await this.prisma.shippingAddress.findMany({
			where: { userId }
		})

		if (!addresses) {
			throw new NotFoundException('No shipping addresses found for this user')
		}

		return addresses
	}

	async addAddress(userId: string, dto: ShippingAddressDto) {
		const address = await this.prisma.shippingAddress.create({
			data: {
				...dto,
				user: {
					connect: { id: userId }
				}
			}
		})

		if (!address) {
			throw new Error('Failed to add shipping address')
		}

		return address
	}

	async deleteAddress(userId: string, addressId: string) {
		const address = await this.prisma.shippingAddress.findUnique({
			where: { id: addressId, userId }
		})

		if (!address) {
			throw new NotFoundException('Shipping address not found')
		}

		await this.prisma.shippingAddress.delete({
			where: { id: addressId }
		})

		return { message: 'Shipping address deleted successfully' }
	}
}
