import { Prisma } from '@prisma/client'

export const STYLES: Prisma.DressStyleCreateInput[] = [
	{
		name: 'Classic'
	},
	{
		name: 'Casual'
	},
	{
		name: 'Business'
	},
	{
		name: 'Sport'
	},
	{
		name: 'Elegant'
	},
	{
		name: 'Formal Evening'
	}
]
