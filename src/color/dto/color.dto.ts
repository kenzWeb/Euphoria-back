import { IsString } from 'class-validator'

export class ColorDto {
	@IsString({
		message: 'Название цвета обязательно'
	})
	name: string

	@IsString({
		message: 'Значение обязателен'
	})
	value: string
}
