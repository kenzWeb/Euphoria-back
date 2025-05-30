import { IsEmail, IsOptional, IsString } from 'class-validator'

export class UserUpdateDto {
	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsEmail({}, { message: 'Email must be a valid email address' })
	email: string
}
