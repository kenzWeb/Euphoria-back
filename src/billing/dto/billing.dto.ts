import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class BillingDto {
	@ApiProperty({ description: 'First name', example: 'John' })
	@IsString()
	@IsNotEmpty()
	@Length(2, 50)
	firstName: string

	@ApiProperty({ description: 'Last name', example: 'Doe' })
	@IsString()
	@IsNotEmpty()
	@Length(2, 50)
	lastName: string

	@ApiProperty({ description: 'Country', example: 'United States' })
	@IsString()
	@IsNotEmpty()
	country: string

	@ApiPropertyOptional({
		description: 'Company name (optional)',
		example: 'Acme Inc.'
	})
	@IsString()
	@IsOptional()
	company?: string

	@ApiProperty({ description: 'Street address', example: '123 Main St' })
	@IsString()
	@IsNotEmpty()
	streetAddress: string

	@ApiPropertyOptional({
		description: 'Apartment/suite (optional)',
		example: 'Apt 4B'
	})
	@IsString()
	@IsOptional()
	apartment?: string

	@ApiProperty({ description: 'City', example: 'New York' })
	@IsString()
	@IsNotEmpty()
	city: string

	@ApiProperty({ description: 'Postal code', example: '10001' })
	@IsString()
	@IsNotEmpty()
	postalCode: string

	@ApiProperty({ description: 'Phone number', example: '+1-555-123-4567' })
	@IsString()
	@IsNotEmpty()
	phone: string
}
