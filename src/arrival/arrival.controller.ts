import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'

import { Auth } from 'src/auth/decorators/auth.decorator'
import { ArrivalService } from './arrival.service'
import { ArrivalDto } from './dto/arrival.dto'

@Controller('arrivals')
export class ArrivalController {
	constructor(private readonly arrivalService: ArrivalService) {}

	@Post()
	create(@Body() createArrivalDto: ArrivalDto) {
		return this.arrivalService.create(createArrivalDto)
	}

	@Get()
	findAll() {
		return this.arrivalService.getAll()
	}

	@Get(':id')
	@Auth()
	findOne(@Param('id') id: string) {
		return this.arrivalService.getById(id)
	}

	@Patch(':id')
	@Auth()
	update(@Param('id') id: string, @Body() updateArrivalDto: ArrivalDto) {
		return this.arrivalService.update(id, updateArrivalDto)
	}

	@Delete(':id')
	@Auth()
	remove(@Param('id') id: string) {
		return this.arrivalService.remove(id)
	}
}
