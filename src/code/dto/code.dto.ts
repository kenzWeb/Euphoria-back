import { IsNumber, IsString } from 'class-validator'

export class CodeDto {
	@IsString({
		message: 'Код должен быть строкой'
	})
	code: string

	@IsNumber(
		{},
		{
			message: 'Количество должно быть числом'
		}
	)
	value: number
}
