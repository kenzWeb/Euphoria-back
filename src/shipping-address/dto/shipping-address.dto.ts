import {
	IsEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator'

export class ShippingAddressDto {
	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	firstName: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	lastName: string

	@MaxLength(50)
	@MinLength(2)
	@IsEmpty()
	@IsString()
	region: string

	@MaxLength(50)
	@MinLength(2)
	@IsOptional()
	@IsString()
	company: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	streetAddress: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	suite: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	city: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	state: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	phone: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsEmpty()
	postalCode: string

	@MaxLength(200)
	@MinLength(7)
	@IsOptional()
	@IsString()
	instruction: string
}
