import { Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import { ArrivalModule } from './arrival/arrival.module'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { ColorModule } from './color/color.module'
import { DressStyleModule } from './dress-style/dress-style.module'
import { FileModule } from './file/file.module'
import { OrderModule } from './order/order.module'
import { ProductModule } from './product/product.module'
import { ShippingAddressModule } from './shipping-address/shipping-address.module'
import { SizeModule } from './size/size.module'
import { UserModule } from './user/user.module'
import { ZoneModule } from './zone/zone.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		ColorModule,
		CategoryModule,
		OrderModule,
		ProductModule,
		SizeModule,
		DressStyleModule,
		ShippingAddressModule,
		ArrivalModule,
		ZoneModule,
		FileModule
	]
})
export class AppModule {}
