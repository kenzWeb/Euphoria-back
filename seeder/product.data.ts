import { EnumGender, EnumProductType, Prisma } from '@prisma/client'

export const PRODUCTS: Prisma.ProductCreateInput[] = [
	{
		name: 'Activewear',
		brand: 'FashionHub',
		price: 25,
		description: 'Comfortable t-shirt with eye-catching blue details',
		images: ['/uploads/arrival/arrival-1.jpg'],
		gender: EnumGender.MALE,
		type: EnumProductType.ARRIVAL,
		category: { connect: { id: 'cm4ipyhmm000537x73bogemh0' } },
		dressStyle: { connect: { id: 'cm4iqqbmi0001v35syjumxe82' } }, // Sport style
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4j05k2d000bqhh3cb79iano' } } }, // Blue
				{ color: { connect: { id: 'cm4j03u6w0005qhh32co6y50l' } } } // White
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4j0adu2000311rgq6mqjtrj' } } }, // S
				{ size: { connect: { id: 'cm4j0agl3000411rgcxx1akwn' } } }, // M
				{ size: { connect: { id: 'cm4j0akdr000511rgvo4z6zbv' } } } // L
			]
		}
	},
	{
		name: 'Hawaiian Shirts',
		brand: 'FashionHub',
		price: 35,
		description: 'Comfortable t-shirt with eye-catching blue details',
		images: ['/uploads/arrival/arrival-2.jpg'],
		gender: EnumGender.MALE,
		type: EnumProductType.ARRIVAL,
		category: { connect: { id: 'cm4ipy4cs000337x7xv07t3xz' } },
		dressStyle: { connect: { id: 'cm4iqqbmi0001v35syjumxe82' } }, // Sport style
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4j05k2d000bqhh3cb79iano' } } }, // Blue
				{ color: { connect: { id: 'cm4j03u6w0005qhh32co6y50l' } } } // White
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4j0adu2000311rgq6mqjtrj' } } }, // S
				{ size: { connect: { id: 'cm4j0agl3000411rgcxx1akwn' } } }, // M
				{ size: { connect: { id: 'cm4j0akdr000511rgvo4z6zbv' } } } // L
			]
		}
	},
	{
		name: 'Graphic Tee',
		brand: 'hasus',
		price: 55,
		description: 'Comfortable t-shirt with eye-catching blue details',
		images: ['/uploads/arrival/arrival-3.jpg'],
		gender: EnumGender.MALE,
		type: EnumProductType.ARRIVAL,
		category: { connect: { id: 'cm4ipxtt2000137x7cqxaojs2' } },
		dressStyle: { connect: { id: 'cm4iqqojr0002v35s7hf6n2g4' } }, // Sport style
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4j05k2d000bqhh3cb79iano' } } }, // Blue
				{ color: { connect: { id: 'cm4j03u6w0005qhh32co6y50l' } } } // White
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4j0adu2000311rgq6mqjtrj' } } }, // S
				{ size: { connect: { id: 'cm4j0agl3000411rgcxx1akwn' } } }, // M
				{ size: { connect: { id: 'cm4j0akdr000511rgvo4z6zbv' } } } // L
			]
		}
	},
	{
		name: 'Gandur',
		brand: 'FashionHub',
		price: 65,
		description: 'Comfortable t-shirt with eye-catching blue details',
		images: ['/uploads/arrival/arrival-4.jpg'],
		gender: EnumGender.FEMALE,
		type: EnumProductType.ARRIVAL,
		category: { connect: { id: 'cm4ipym5k000637x7cz89edqn' } },
		dressStyle: { connect: { id: 'cm4iqqvf10004v35sa77ql1u6' } }, // Sport style
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4j05k2d000bqhh3cb79iano' } } }, // Blue
				{ color: { connect: { id: 'cm4j03u6w0005qhh32co6y50l' } } } // White
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4j0adu2000311rgq6mqjtrj' } } }, // S
				{ size: { connect: { id: 'cm4j0agl3000411rgcxx1akwn' } } }, // M
				{ size: { connect: { id: 'cm4j0akdr000511rgvo4z6zbv' } } } // L
			]
		}
	},
	{
		name: 'Gandur',
		brand: 'FashionHub',
		price: 65,
		description: 'Comfortable t-shirt with eye-catching blue details',
		images: ['/uploads/arrival/arrival-4.jpg'],
		gender: EnumGender.FEMALE,
		type: EnumProductType.ARRIVAL,
		category: { connect: { id: 'cm4ipym5k000637x7cz89edqn' } },
		dressStyle: { connect: { id: 'cm4iqqvf10004v35sa77ql1u6' } }, // Sport style
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4j05k2d000bqhh3cb79iano' } } }, // Blue
				{ color: { connect: { id: 'cm4j03u6w0005qhh32co6y50l' } } } // White
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4j0adu2000311rgq6mqjtrj' } } }, // S
				{ size: { connect: { id: 'cm4j0agl3000411rgcxx1akwn' } } }, // M
				{ size: { connect: { id: 'cm4j0akdr000511rgvo4z6zbv' } } } // L
			]
		}
	},
]
