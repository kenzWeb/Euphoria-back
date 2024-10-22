import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ColorModule } from './color/color.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { SizeModule } from './size/size.module';
import { DressStyleModule } from './dress-style/dress-style.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, ColorModule, CategoryModule, OrderModule, ProductModule, SizeModule, DressStyleModule, ShippingAddressModule],
})
export class AppModule {}
