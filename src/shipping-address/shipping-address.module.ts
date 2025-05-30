import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ShippingAddressController } from './shipping-address.controller'
import { ShippingAddressService } from './shipping-address.service'

@Module({
	controllers: [ShippingAddressController],
	providers: [ShippingAddressService, PrismaService]
})
export class ShippingAddressModule {}
