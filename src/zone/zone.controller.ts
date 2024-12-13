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
import { ZoneDto } from './dto/zone.dto'
import { ZoneService } from './zone.service'

@Controller('zones')
export class ZoneController {
	constructor(private readonly zoneService: ZoneService) {}

	@Post()
	create(@Body() createZoneDto: ZoneDto) {
		return this.zoneService.create(createZoneDto)
	}

	@Get()
	findAll() {
		return this.zoneService.getAll()
	}

	@Get(':id')
	@Auth()
	findOne(@Param('id') id: string) {
		return this.zoneService.getById(id)
	}

	@Patch(':id')
	@Auth()
	update(@Param('id') id: string, @Body() updateZoneDto: ZoneDto) {
		return this.zoneService.update(id, updateZoneDto)
	}

	@Delete(':id')
	@Auth()
	remove(@Param('id') id: string) {
		return this.zoneService.remove(id)
	}
}
