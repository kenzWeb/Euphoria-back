import { PrismaClient } from '@prisma/client'
import { ARRIVAL } from './ARRIVAL.data'

const prisma = new PrismaClient()

async function arrival() {
	console.log('Starting data upload...')

	try {
		const result = await prisma.arrival.createMany({ data: ARRIVAL })
		console.log(`Successfully added ${result.count} games to the database.`)
	} catch (e) {
		console.error('Error during data upload:', e)
		process.exit(1)
	} finally {
		await prisma.$disconnect()
		console.log('Disconnected from database.')
	}
}

arrival()
