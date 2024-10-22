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
import { ColorService } from './color.service'
import { ColorDto } from './dto/color.dto'

@Controller('colors')
export class ColorController {
	constructor(private readonly colorService: ColorService) {}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.colorService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post('create')
	async create(@Body() dto: ColorDto) {
		this.colorService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('update')
	async update(@Param('id') id: string, @Body() dto: ColorDto) {
		return this.colorService.update(id, dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.colorService.delete(id)
	}
}
