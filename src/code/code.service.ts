import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CodeDto } from './dto/code.dto'

@Injectable()
export class CodeService {
	constructor(private prisma: PrismaService) {}

	async getAllCodes() {
		const codes = await this.prisma.promoCode.findMany()

		if (!codes || codes.length === 0) {
			throw new NotFoundException('No promo codes found')
		}

		return codes
	}

	async getCode(code: string) {
		if (!code) {
			throw new BadRequestException('Promo code must be provided')
		}

		const codeData = await this.prisma.promoCode.findUnique({
			where: {
				code: code
			}
		})

		if (!codeData) {
			throw new NotFoundException('Promo code not found')
		}

		return codeData
	}

	async createCode(dto: CodeDto) {
		const oldCode = await this.prisma.promoCode.findUnique({
			where: {
				code: dto.code
			}
		})

		if (oldCode) {
			throw new NotFoundException('Promo code already exists')
		}

		const codeData = await this.prisma.promoCode.create({
			data: {
				code: dto.code,
				value: dto.value
			}
		})

		return codeData
	}
}
