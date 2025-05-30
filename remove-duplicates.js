const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function removeDuplicates() {
	try {
		console.log('🧹 Начинаем очистку дублирующихся записей...\n')

		// Очистка дублирующихся категорий
		console.log('📂 Очистка категорий...')
		const categories = await prisma.category.findMany({
			select: { id: true, name: true },
			orderBy: { id: 'asc' }
		})

		const seenCategories = new Set()
		const categoriesToDelete = []

		for (const category of categories) {
			if (seenCategories.has(category.name)) {
				categoriesToDelete.push(category.id)
			} else {
				seenCategories.add(category.name)
			}
		}

		if (categoriesToDelete.length > 0) {
			await prisma.category.deleteMany({
				where: { id: { in: categoriesToDelete } }
			})
			console.log(
				`   ✅ Удалено ${categoriesToDelete.length} дублирующихся категорий`
			)
		} else {
			console.log('   ✅ Дублирующихся категорий не найдено')
		}

		// Очистка дублирующихся цветов
		console.log('🎨 Очистка цветов...')
		const colors = await prisma.color.findMany({
			select: { id: true, name: true },
			orderBy: { id: 'asc' }
		})

		const seenColors = new Set()
		const colorsToDelete = []

		for (const color of colors) {
			if (seenColors.has(color.name)) {
				colorsToDelete.push(color.id)
			} else {
				seenColors.add(color.name)
			}
		}

		if (colorsToDelete.length > 0) {
			await prisma.color.deleteMany({
				where: { id: { in: colorsToDelete } }
			})
			console.log(`   ✅ Удалено ${colorsToDelete.length} дублирующихся цветов`)
		} else {
			console.log('   ✅ Дублирующихся цветов не найдено')
		}

		// Очистка дублирующихся размеров
		console.log('📏 Очистка размеров...')
		const sizes = await prisma.size.findMany({
			select: { id: true, name: true },
			orderBy: { id: 'asc' }
		})

		const seenSizes = new Set()
		const sizesToDelete = []

		for (const size of sizes) {
			if (seenSizes.has(size.name)) {
				sizesToDelete.push(size.id)
			} else {
				seenSizes.add(size.name)
			}
		}

		if (sizesToDelete.length > 0) {
			await prisma.size.deleteMany({
				where: { id: { in: sizesToDelete } }
			})
			console.log(
				`   ✅ Удалено ${sizesToDelete.length} дублирующихся размеров`
			)
		} else {
			console.log('   ✅ Дублирующихся размеров не найдено')
		}

		// Очистка дублирующихся стилей одежды
		console.log('👗 Очистка стилей одежды...')
		const dressStyles = await prisma.dressStyle.findMany({
			select: { id: true, name: true },
			orderBy: { id: 'asc' }
		})

		const seenStyles = new Set()
		const stylesToDelete = []

		for (const style of dressStyles) {
			if (seenStyles.has(style.name)) {
				stylesToDelete.push(style.id)
			} else {
				seenStyles.add(style.name)
			}
		}

		if (stylesToDelete.length > 0) {
			await prisma.dressStyle.deleteMany({
				where: { id: { in: stylesToDelete } }
			})
			console.log(
				`   ✅ Удалено ${stylesToDelete.length} дублирующихся стилей одежды`
			)
		} else {
			console.log('   ✅ Дублирующихся стилей одежды не найдено')
		}

		// Показываем финальную статистику
		console.log('\n📊 Финальная статистика:')
		const finalCategories = await prisma.category.count()
		const finalColors = await prisma.color.count()
		const finalSizes = await prisma.size.count()
		const finalDressStyles = await prisma.dressStyle.count()

		console.log(`   Категории: ${finalCategories}`)
		console.log(`   Цвета: ${finalColors}`)
		console.log(`   Размеры: ${finalSizes}`)
		console.log(`   Стили одежды: ${finalDressStyles}`)

		console.log('\n✅ Очистка дублирующихся записей завершена!')

		await prisma.$disconnect()
	} catch (error) {
		console.error('❌ Ошибка при очистке дублирующихся записей:', error)
		await prisma.$disconnect()
		process.exit(1)
	}
}

removeDuplicates()
