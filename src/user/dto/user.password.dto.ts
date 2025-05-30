import { IsString, MinLength } from 'class-validator'

export class UserPasswordDto {
	@IsString({
		message: 'Пароль обязателен'
	})
	oldPassword: string

	@IsString({
		message: 'Пароль обязателен'
	})
	
	@MinLength(6, {
		message: 'Пароль должен содержать не менее 6 символов!'
	})
	newPassword: string
}
