import {
	BadRequestException,
	Body,
	Controller,
	Get,
	Param,
	Post
} from '@nestjs/common'
import { ApiKeyProtected } from 'src/auth/decorators/api-key-protected.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CodeService } from './code.service'
import { CodeDto } from './dto/code.dto'

@Controller('codes')
export class CodeController {
	constructor(private readonly codeService: CodeService) {}

	@ApiKeyProtected()
	@Get('')
	async getAllCodes() {
		return this.codeService.getAllCodes()
	}

	@Auth()
	@Get('by-code/:code')
	async getByCode(@Param('code') code: string) {
		return this.codeService.getCode(code)
	}

	@ApiKeyProtected()
	@Post('')
	async createCode(@Body() dto: CodeDto) {
		if (!dto) {
			throw new BadRequestException('Code and value are required')
		}

		return this.codeService.createCode(dto)
	}
}
