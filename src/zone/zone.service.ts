import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ZoneDto } from './dto/zone.dto'

@Injectable()
export class ZoneService {
	constructor(private prisma: PrismaService) {}

	getAll() {
		return this.prisma.zone.findMany()
	}

	getById(id: string) {
		return this.prisma.zone.findUnique({
			where: {
				id
			}
		})
	}

	create(ZoneDto: ZoneDto) {
		return this.prisma.zone.create({
			data: {
				title: ZoneDto.title,
				description: ZoneDto.description,
				price: ZoneDto.price,
				img: ZoneDto.image
			}
		})
	}

	update(id: string, ZoneDto: ZoneDto) {
		return this.prisma.zone.update({
			where: {
				id
			},
			data: {
				title: ZoneDto.title,
				description: ZoneDto.description,
				price: ZoneDto.price,
				img: ZoneDto.image
			}
		})
	}

	remove(id: string) {
		return this.prisma.zone.delete({
			where: {
				id
			},
			select: {
				title: true,
				description: true,
				price: true,
				img: true
			}
		})
	}
}
