import { EnumGender } from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'

export class ProductDto {
	@IsString({
		message: 'should be string1'
	})
	name: string
	@IsString({
		message: 'should be string2'
	})
	brand: string
	@IsNumber(
		{},
		{
			message: 'should be number'
		}
	)
	price: number
	@IsString({
		message: 'should be string3'
	})
	gender: EnumGender
	@IsString({
		message: 'should be string4'
	})
	styleId: string
}
