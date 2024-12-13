import { PrismaClient } from '@prisma/client'
import { PRODUCTS } from './product.data'

const prisma = new PrismaClient()

async function seedProducts() {
	console.log('Начинается загрузка данных продуктов...')

	try {
		for (const productData of PRODUCTS) {
			await prisma.product.create({
				data: productData
			})
		}
		console.log('Данные продуктов успешно загружены')
	} catch (error) {
		console.error('Ошибка при загрузке данных продуктов:', error)
	} finally {
		await prisma.$disconnect()
	}
}

seedProducts()
