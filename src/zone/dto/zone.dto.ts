import { IsString } from 'class-validator'

export class ZoneDto {
	@IsString({ message: 'Zone title must be a string' })
	title: string

	@IsString({ message: 'Zone description must be a string' })
	description: string

	@IsString({ message: 'Zone price must be a string' })
	price: string

	@IsString({ message: 'Zone image must be a string' })
	image: string
}
