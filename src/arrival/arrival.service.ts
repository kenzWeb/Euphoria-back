import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ArrivalDto } from './dto/arrival.dto'

@Injectable()
export class ArrivalService {
	constructor(private prisma: PrismaService) {}

	getAll() {
		return this.prisma.arrival.findMany()
	}

	getById(id: string) {
		return this.prisma.arrival.findUnique({
			where: {
				id
			}
		})
	}

	create(ArrivalDto: ArrivalDto) {
		return this.prisma.arrival.create({
			data: {
				title: ArrivalDto.title,
				img: ArrivalDto.img
			}
		})
	}

	update(id: string, ArrivalDto: ArrivalDto) {
		return this.prisma.arrival.update({
			where: {
				id
			},
			data: {
				title: ArrivalDto.title,
				img: ArrivalDto.img
			}
		})
	}

	remove(id: string) {
		return this.prisma.arrival.delete({
			where: {
				id
			},
			select: {
				title: true,
				img: true
			}
		})
	}
}
