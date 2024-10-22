import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { DressStyleService } from './dress-style.service'
import { dressStyleDto } from './dto/dress-style.dto'

@Controller('dressStyles')
export class DressStyleController {
	constructor(private readonly dressStyleService: DressStyleService) {}

	@Get()
	async getAll() {
		return this.dressStyleService.getAll()
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.dressStyleService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async create(@Body() dto: dressStyleDto) {
		return this.dressStyleService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: dressStyleDto) {
		return this.dressStyleService.update(id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.dressStyleService.delete(id)
	}
}
