import { PrismaClient } from '@prisma/client'
import { ZONES } from './zone.data'

const prisma = new PrismaClient()

async function zone() {
	console.log('Starting data upload...')

	try {
		const result = await prisma.zone.createMany({ data: ZONES })
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
