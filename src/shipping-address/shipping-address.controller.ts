import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorators/user.decorators'
import { ShippingAddressDto } from './dto/shipping-address.dto'
import { ShippingAddressService } from './shipping-address.service'

@Controller('shipping-addresses')
export class ShippingAddressController {
	constructor(
		private readonly shippingAddressService: ShippingAddressService
	) {}

	@Auth()
	@Get()
	async getShippingAddresses(@CurrentUser('id') userId: string) {
		return this.shippingAddressService.getByUserId(userId)
	}

	@Auth()
	@Post()
	async addShippingAddress(
		@CurrentUser('id') userId: string,
		@Body() dto: ShippingAddressDto
	) {
		return this.shippingAddressService.addAddress(userId, dto)
	}

	@Auth()
	@Delete()
	async deleteShippingAddress(
		@CurrentUser('id') userId: string,
		@Body() addressId: string
	) {
		return this.shippingAddressService.deleteAddress(userId, addressId)
	}
}
