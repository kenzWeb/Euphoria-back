import { IsString } from 'class-validator'

export class SizeDto {
	@IsString({ message: 'Идентификатор размера обязателен' })
	id: string

	@IsString({ message: 'Название размера обязательно' })
	name: string
}
