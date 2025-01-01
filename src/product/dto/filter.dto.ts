import { EnumGender } from '@prisma/client'
import { IsEnum, IsOptional, IsString } from 'class-validator'
import { PaginationDto } from 'src/pagination/pagination.dto'

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export class FilterDto extends PaginationDto {
	@IsOptional()
	@IsString()
	categoryId?: string

	@IsOptional()
	@IsString()
	category?: string

	@IsOptional()
	@IsString()
	styleId?: string

	@IsOptional()
	@IsString()
	style?: string

	@IsOptional()
	@IsEnum(EnumGender)
	gender?: EnumGender

	@IsOptional()
	@IsString()
	minPrice?: string

	@IsOptional()
	@IsString()
	maxPrice?: string

	@IsOptional()
	@IsString({ each: true })
	colors?: string | string[]

	@IsOptional()
	@IsString({ each: true })
	sizes?: string | string[]

	@IsOptional()
	@IsEnum(EnumProductSort)
	sort?: EnumProductSort

	@IsOptional()
	@IsString()
	searchTerm?: string
}
