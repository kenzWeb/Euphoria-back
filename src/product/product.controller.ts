import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { EnumProductType } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ProductDto } from './dto/product.dto'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	async getAll() {
		return this.productService.getAll()
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.productService.getById(id)
	}

	@Get('by-type/:type')
	async getByType(@Param('type') type: EnumProductType) {
		return this.productService.getByType(type)
	}

	@Get('by-style/:styleId')
	async getByStyle(@Param('styleId') styleId: string) {
		return this.productService.getByStyle(styleId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post(':categoryId')
	async create(
		@Body() dto: ProductDto,
		@Param('categoryId') categoryId: string
	) {
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

	@HttpCode(200)
	@Auth()
	@Post('favorites/:productId')
	async favorites(
		@Param('productId') productId: string,
		@Body('userId') userId: string
	) {
		return this.productService.toggleFavorite(userId, productId)
	}

	@Get('by-category/:categoryId')
	async getByCategory(@Param('categoryId') categoryId: string) {
		return this.productService.getByCategory(categoryId)
	}
}
