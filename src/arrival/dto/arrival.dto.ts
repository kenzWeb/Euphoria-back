import { IsString } from 'class-validator'

export class ArrivalDto {
	@IsString()
	title: string
	@IsString()
	img: string
}
