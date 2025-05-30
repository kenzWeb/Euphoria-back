import {
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator'

export class ShippingAddressDto {
	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	firstName: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	lastName: string

	@MaxLength(50)
	@MinLength(2)
	@IsNotEmpty()
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
	@IsNotEmpty()
	streetAddress: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	suite: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	city: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	state: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	phone: string

	@MaxLength(50)
	@MinLength(2)
	@IsString()
	@IsNotEmpty()
	postalCode: string

	@MaxLength(200)
	@MinLength(7)
	@IsOptional()
	@IsString()
	instruction: string
}
