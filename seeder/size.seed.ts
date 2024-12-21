import { PrismaClient } from '@prisma/client'
import { SIZES } from './size.data'

const prisma = new PrismaClient()

async function zone() {
	console.log('Starting data upload...')

	try {
		const result = await prisma.size.createMany({ data: SIZES })
		console.log(`Successfully added ${result.count} games to the database.`)
	} catch (e) {
		console.error('Error during data upload:', e)
		process.exit(1)
	} finally {
		await prisma.$disconnect()
		console.log('Disconnected from database.')
	}
}

zone()
