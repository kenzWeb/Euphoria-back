import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorators/user.decorators'
import { OrderDto } from './dto/order.dto'
import { PaymentStatusDto } from './dto/payment-status.dto'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create')
	@Auth()
	async checkout(@Body() dto: OrderDto, @CurrentUser('id') userId: string) {
		return this.orderService.createPayment(dto, userId)
	}

	@HttpCode(200)
	@Post('status')
	@Auth()
	async updateOrederStatus(@Body() dto: PaymentStatusDto) {
		return this.orderService.updateStatus(dto)
	}

	@HttpCode(200)
	@Get('my-orders')
	@Auth()
	async getMyOrders(@CurrentUser('id') userId: string) {
		return this.orderService.getMyOrders(userId)
	}
}
