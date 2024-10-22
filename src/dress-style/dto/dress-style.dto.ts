import { IsNotEmpty, IsString } from 'class-validator'

export class dressStyleDto {
	@IsString({
		message: 'Название обязательно'
	})
	@IsNotEmpty({ message: 'Название не может быть пустым' })
	name: string
}
