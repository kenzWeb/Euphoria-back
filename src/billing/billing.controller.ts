import { Body, Controller, Post, Query } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorators/user.decorators'
import { BillingService } from './billing.service'
import { BillingDto } from './dto/billing.dto'

@Controller('billing')
export class BillingController {
	constructor(private readonly billingService: BillingService) {}

	@Auth()
	@Post('check')
	async checkBilling(
		@Body() dto: BillingDto,
		@CurrentUser('id') userId: string,
		@Query('isSave') isSave?: string
	) {
		const shouldSave = isSave === 'true' || isSave === 'True'
		return await this.billingService.checkBilling(dto, shouldSave, userId)
	}
}
