import { Prisma } from '@prisma/client'

export const ZONES: Prisma.ZoneCreateManyInput[] = [
	{
		title: 'Hawaiian Shirts',
		description: 'Dress up in summer vibe',
		price: 'UPTO 50% OFF',
		img: '/uploads/zone/1.jpg'
	},
	{
		title: 'Oversized T-Shirts',
		description: 'Street Style Icon',
		price: 'FLAT 60% OFF',
		img: '/uploads/zone/2.jpg'
	},
	{
		title: 'Urban Shirts',
		description: 'Live In Confort',
		price: 'FLAT 60% OFF',
		img: '/uploads/zone/3.jpg'
	},
	{
		title: 'Printed T-Shirt',
		description: 'Move with style & comfort',
		price: 'UPTO 40% OFF',
		img: '/uploads/zone/4.jpg'
	},
	{
		title: 'Cargo Joggers',
		description: 'Move with style & comfort',
		price: 'UPTO 50% OFF',
		img: '/uploads/zone/5.jpg'
	}
]

// Limited Stock
// Hawaiian
// Shirts
// Printed
// T-Shirt
// Cargo
// Joggers
// Dress up in summer vibe
// Move with style & comfort
// UPTO 50% OFF
// New Designs Every Week
// UPTO 50% OFF
// UPTO 40% OFF
// SHOP NOW
// SHOP NOW
// SHOP NOW
// Urban
// Shirts
// Live In Confort
// FLAT 60% OFF
// SHOP NOW
