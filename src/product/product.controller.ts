import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { EnumGender, EnumProductType } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { FilterDto } from './dto/filter.dto'
import { ProductDto } from './dto/product.dto'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	async getAll(@Query() dto: FilterDto = {}) {
		return this.productService.getAll(dto)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.productService.getById(id)
	}

	@Get('by-type/:type')
	async getByType(@Param('type') type: EnumProductType) {
		return this.productService.getByType(type)
	}

	@Get('by-style/:style')
	async getByStyle(@Param('styleId') style: string) {
		return this.productService.getByStyle(style)
	}

	@Get('by-styleId/:styleId')
	async getByStyleId(@Param('styleId') styleId: string) {
		return this.productService.getByStyleId(styleId)
	}

	@Get('by-category/:category')
	async getByCategory(@Param('category') category: string) {
		return this.productService.getByCategory(category)
	}

	@Get('by-categoryId/:categoryId')
	async getByCategoryId(@Param('categoryId') categoryId: string) {
		return this.productService.getByCategoryId(categoryId)
	}

	@Get('by-gender/:gender')
	async getByGender(@Param('gender') gender: EnumGender) {
		return this.productService.getByGender(gender)
	}

	@Get('similar/:id')
	async getSimilar(@Param('id') id: string) {
		return this.productService.getSimilar(id)
	}

	@UsePipes(
		new ValidationPipe({
			transform: true,
			whitelist: true
		})
	)
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post(':category')
	async create(@Body() dto: ProductDto, @Param('category') categoryId: string) {
		return this.productService.create(dto, categoryId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ProductDto) {
		return this.productService.update(id, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.productService.delete(id)
	}
}
