const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getIds() {
	try {
		const categories = await prisma.category.findMany({
			orderBy: { id: 'asc' }
		})

		const colors = await prisma.color.findMany({
			orderBy: { id: 'asc' }
		})

		const sizes = await prisma.size.findMany({
			orderBy: { id: 'asc' }
		})

		const dressStyles = await prisma.dressStyle.findMany({
			orderBy: { id: 'asc' }
		})

		console.log('=== CATEGORIES ===')
		categories.forEach((cat, index) => {
			console.log(`${index}: ${cat.name} - ${cat.id}`)
		})

		console.log('\n=== COLORS ===')
		colors.forEach((color, index) => {
			console.log(`${index}: ${color.name} - ${color.id}`)
		})

		console.log('\n=== SIZES ===')
		sizes.forEach((size, index) => {
			console.log(`${index}: ${size.name} - ${size.id}`)
		})

		console.log('\n=== DRESS STYLES ===')
		dressStyles.forEach((style, index) => {
			console.log(`${index}: ${style.name} - ${style.id}`)
		})

		await prisma.$disconnect()
	} catch (error) {
		console.error('Error:', error)
		await prisma.$disconnect()
	}
}

getIds()
