import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BillingDto } from './dto/billing.dto'

@Injectable()
export class BillingService {
	constructor(private prisma: PrismaService) {}

	async checkBilling(dto: BillingDto, isSave: boolean, userId: string) {
		try {
			const isValid = Boolean(
				dto.firstName &&
					dto.lastName &&
					dto.country &&
					dto.streetAddress &&
					dto.city &&
					dto.postalCode &&
					dto.phone
			)

			if (!isValid) {
				return {
					isValid: false,
					message: 'Invalid billing data'
				}
			}

			if (isSave) {
				const billing = await this.prisma.billing.create({
					data: {
						firstName: dto.firstName,
						lastName: dto.lastName,
						country: dto.country,
						company: dto.company,
						streetAddress: dto.streetAddress,
						apartment: dto.apartment,
						city: dto.city,
						postalCode: dto.postalCode,
						phone: dto.phone,
						user: {
							connect: {
								id: userId
							}
						}
					}
				})

				return {
					isValid: true,
					message: 'Billing data is valid and saved',
					billing: billing
				}
			}

			return {
				isValid: true,
				message: 'Billing data is valid'
			}
		} catch (error) {
			console.error('Error in checkBilling:', error)
			return {
				isValid: false,
				message: 'Error occurred while checking billing data'
			}
		}
	}
}
