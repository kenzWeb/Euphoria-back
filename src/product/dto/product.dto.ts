import { EnumGender } from '@prisma/client'
import {
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsString
} from 'class-validator'

export class ColorDto {
	@IsString()
	id: string
}

export class SizeDto {
	@IsString()
	id: string
}

export class ProductDto {
	@IsString({
		message: 'name should be string'
	})
	name: string
	@IsString({
		message: 'brand should be string'
	})
	brand: string
	@IsString({
		message: 'description should be string'
	})
	description: string
	@IsNumber(
		{},
		{
			message: 'should be number'
		}
	)
	price: number
	@IsString({
		message: 'gender should be string'
	})
	gender: EnumGender
	@IsString({
		message: 'styleId should be string'
	})
	styleId?: string
	@IsArray({
		message: 'colors should be array of objects'
	})
	colors?: ColorDto[]
	@ArrayMinSize(1, { message: 'Должна быть хотя бы одна картинка' })
	@IsNotEmpty({
		each: true,
		message: 'Путь к картинке не может быть пустым'
	})
	images: string[]
	@IsArray({
		message: 'sizes should be array of strings'
	})
	sizes?: SizeDto[]
}
