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
import { SizeDto } from './dto/size.dto'
import { SizeService } from './size.service'

@Controller('sizes')
export class SizeController {
	constructor(private readonly sizeService: SizeService) {}

	@Get()
	async getAll() {
		return this.sizeService.getAll()
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.sizeService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post()
	async create(@Body() dto: SizeDto) {
		return this.sizeService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: SizeDto) {
		return this.sizeService.update(id, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.sizeService.delete(id)
	}
}
