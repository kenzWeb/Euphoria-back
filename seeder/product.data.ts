import { EnumGender, EnumProductType, Prisma } from '@prisma/client'

export const PRODUCTS: Prisma.ProductCreateInput[] = [
	{
		name: 'Black Activewear',
		brand: 'Nike',
		price: 25,
		description:
			'Premium athletic wear featuring breathable fabric and sleek black design. Perfect for high-intensity workouts or casual sport activities. Engineered for maximum comfort and mobility.',
		images: [
			'/uploads/products/Activewear.jpg',
			'/uploads/products/Activewear.jpg',
			'/uploads/products/Activewear.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p1000cdrxzn0n6cg6x' } },
		dressStyle: { connect: { id: 'cm4vpnff00000qo6t0c2f7pc8' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0002uiydc03b8pps' } } },
				{ color: { connect: { id: 'cm4vpmu1d0001uiydneanb22w' } } },
				{ color: { connect: { id: 'cm4vpmu1d0005uiydbpxr01ik' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00013z49tbk0xbgy' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } }
			]
		}
	},
	{
		name: 'Barboreal Gray Sweats',
		brand: 'Paypal',
		price: 50,
		description:
			'Luxurious gray sweatpants with a modern tapered fit. Features soft-touch fabric and adjustable waistband for all-day comfort. Ideal for both active lifestyles and relaxed weekends.',
		images: [
			'/uploads/products/Barboreal-Gray-Sweats.jpg',
			'/uploads/products/Barboreal-Gray-Sweats.jpg',
			'/uploads/products/Barboreal-Gray-Sweats.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10008drxznmeq1w8k' } },
		dressStyle: { connect: { id: 'cm4vpnff00001qo6t3ndjqelr' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0001uiydneanb22w' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d0005uiydbpxr01ik' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } },
				{ size: { connect: { id: 'cm4vq56zl00013z49tbk0xbgy' } } },
				{ size: { connect: { id: 'cm4vq56zl00043z49716lfxzs' } } }
			]
		}
	},
	{
		name: 'Black Shorts',
		brand: 'MM',
		price: 45,
		description:
			'High-performance athletic shorts with moisture-wicking technology. Features a flattering cut and hidden pocket design. Perfect for running, gym workouts, or summer activities.',
		images: [
			'/uploads/products/Black-Shorts.jpg',
			'/uploads/products/Black-Shorts.jpg',
			'/uploads/products/Black-Shorts.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10007drxz7z8t79pe' } },
		dressStyle: { connect: { id: 'cm4vpnff00005qo6tuvko6q41' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d0009uiydqj0gbaqg' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00073z49cxnip7le' } } },
				{ size: { connect: { id: 'cm4vq56zl00013z49tbk0xbgy' } } },
				{ size: { connect: { id: 'cm4vq56zk00003z49dvtvycmg' } } }
			]
		}
	},
	{
		name: 'Blue Flower Print Crop',
		brand: 'Nike',
		price: 15,
		description:
			'Stylish cropped top with an elegant floral pattern. Made with stretchy, breathable fabric for maximum comfort. Perfect for yoga sessions or casual summer outings.',
		images: [
			'/uploads/products/Blue-Flower-Print-Crop.jpg',
			'/uploads/products/Blue-Flower-Print-Crop.jpg',
			'/uploads/products/Blue-Flower-Print-Crop.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10000drxz7iuahxu4' } },
		dressStyle: { connect: { id: 'cm4vpnff00003qo6t5ivbsvmt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0007uiyd9f9ti7ar' } } },
				{ color: { connect: { id: 'cm4vpmu1d0002uiydc03b8pps' } } },
				{ color: { connect: { id: 'cm4vpmu1d0009uiydqj0gbaqg' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00053z49eq82x818' } } },
				{ size: { connect: { id: 'cm4vq56zl00043z49716lfxzs' } } },
				{ size: { connect: { id: 'cm4vq56zl00033z49gzgs3pxi' } } }
			]
		}
	},
	{
		name: 'White Boxers',
		brand: 'Woden',
		price: 55,
		description:
			'Premium cotton boxers with ergonomic design for maximum comfort. Features moisture-wicking technology and a secure waistband. Perfect blend of style and functionality.',
		images: [
			'/uploads/products/Boxers.jpg',
			'/uploads/products/Boxers.jpg',
			'/uploads/products/Boxers.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10004drxzi13wbelc' } },
		dressStyle: { connect: { id: 'cm4vpnff00000qo6t0c2f7pc8' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0005uiydbpxr01ik' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d0009uiydqj0gbaqg' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00043z49716lfxzs' } } },
				{ size: { connect: { id: 'cm4vq56zl00053z49eq82x818' } } },
				{ size: { connect: { id: 'cm4vq56zl00083z49uprk2k19' } } }
			]
		}
	},
	{
		name: 'Checks Shirt with white',
		brand: 'MM',
		price: 65,
		description:
			'Classic checkered shirt with contemporary styling. Features high-quality cotton blend fabric and precise tailoring. Perfect for casual office wear or weekend outings.',
		images: [
			'/uploads/products/Checks-Shirt-with-white.jpg',
			'/uploads/products/Checks-Shirt-with-white.jpg',
			'/uploads/products/Checks-Shirt-with-white.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10001drxza6r5efwd' } },
		dressStyle: { connect: { id: 'cm4vpnff00002qo6teyyu33pt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0004uiydkjesgon4' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d000auiydobchwscq' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00043z49716lfxzs' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } }
			]
		}
	},
	{
		name: 'Pink Coats',
		brand: 'Woden',
		price: 49,
		description:
			'Elegant pink winter coat with modern silhouette. Features warm insulation and water-resistant exterior. Perfect for staying stylish during cold weather seasons.',
		images: [
			'/uploads/products/Coats-&-Parkas.jpg',
			'/uploads/products/Coats-&-Parkas.jpg',
			'/uploads/products/Coats-&-Parkas.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p1000ddrxz5559z52k' } },
		dressStyle: { connect: { id: 'cm4vpnff00002qo6teyyu33pt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0009uiydqj0gbaqg' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d000auiydobchwscq' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00043z49716lfxzs' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } }
			]
		}
	},
	{
		name: 'Flower Pattern Black',
		brand: 'MM',
		price: 53,
		description:
			'Sophisticated black dress with delicate flower patterns. Features flattering cut and premium fabric blend. Perfect for special occasions or elegant evening events.',
		images: [
			'/uploads/products/Blue-Flower-Print-Crop.jpg',
			'/uploads/products/Blue-Flower-Print-Crop.jpg',
			'/uploads/products/Blue-Flower-Print-Crop.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10002drxzmeligjk2' } },
		dressStyle: { connect: { id: 'cm4vpnff00003qo6t5ivbsvmt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } },
				{ color: { connect: { id: 'cm4vpmu1d0002uiydc03b8pps' } } },
				{ color: { connect: { id: 'cm4vpmu1c0000uiydqbipzvzi' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zk00003z49dvtvycmg' } } },
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00033z49gzgs3pxi' } } }
			]
		}
	},
	{
		name: 'Graphic T-shirt',
		brand: 'Nisargi',
		price: 73,
		description:
			'Creative graphic tee featuring unique artistic design. Made with soft, durable cotton for lasting comfort. Perfect for expressing individual style in casual settings.',
		images: [
			'/uploads/products/Graphic-T-shirt.jpg',
			'/uploads/products/Graphic-T-shirt.jpg',
			'/uploads/products/Graphic-T-shirt.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10001drxza6r5efwd' } },
		dressStyle: { connect: { id: 'cm4vpnff00001qo6t3ndjqelr' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0004uiydkjesgon4' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d000auiydobchwscq' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00073z49cxnip7le' } } },
				{ size: { connect: { id: 'cm4vq56zl00083z49uprk2k19' } } }
			]
		}
	},
	{
		name: 'Green Hoodies Sweetshirt',
		brand: 'Mellon',
		price: 60,
		description:
			'Cozy green hoodie with modern street-style design. Features warm fleece lining and convenient kangaroo pocket. Perfect for casual outings or relaxed weekends.',
		images: [
			'/uploads/products/Hoodies-&-Sweetshirt.jpg',
			'/uploads/products/Hoodies-&-Sweetshirt2.jpg',
			'/uploads/products/Hoodies-&-Sweetshirt.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p1000adrxza2ren8w9' } },
		dressStyle: { connect: { id: 'cm4vpnff00002qo6teyyu33pt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0005uiydbpxr01ik' } } },
				{ color: { connect: { id: 'cm4vpmu1d0007uiyd9f9ti7ar' } } },
				{ color: { connect: { id: 'cm4vpmu1d0001uiydneanb22w' } } },
				{ color: { connect: { id: 'cm4vpmu1d0002uiydc03b8pps' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00033z49gzgs3pxi' } } },
				{ size: { connect: { id: 'cm4vq56zl00053z49eq82x818' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } }
			]
		}
	},
	{
		name: 'Leaves Pattern',
		brand: 'Nike',
		price: 50,
		description:
			'Nature-inspired dress with elegant leaf motifs. Features lightweight, flowing fabric and feminine silhouette. Perfect for spring and summer occasions.',
		images: [
			'/uploads/products/Leaves-Pattern.jpg',
			'/uploads/products/Leaves-Pattern.jpg',
			'/uploads/products/Leaves-Pattern.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10006drxzkui8c9tc' } },
		dressStyle: { connect: { id: 'cm4vpnff00000qo6t0c2f7pc8' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0005uiydbpxr01ik' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } },
				{ color: { connect: { id: 'cm4vpmu1d0002uiydc03b8pps' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00013z49tbk0xbgy' } } },
				{ size: { connect: { id: 'cm4vq56zl00043z49716lfxzs' } } },
				{ size: { connect: { id: 'cm4vq56zl00083z49uprk2k19' } } }
			]
		}
	},
	{
		name: 'Levende Hoodie',
		brand: 'AS',
		price: 70,
		description:
			'Fashion-forward hoodie with contemporary design elements. Features premium blend fabric and detailed finishing. Perfect for style-conscious casual wear.',
		images: [
			'/uploads/products/Levende-Hoodie.jpg',
			'/uploads/products/Levende-Hoodie.jpg',
			'/uploads/products/Levende-Hoodie.jpg'
		],
		gender: EnumGender.FEMALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p1000adrxza2ren8w9' } },
		dressStyle: { connect: { id: 'cm4vpnff00001qo6t3ndjqelr' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0003uiydx9uhfu5m' } } },
				{ color: { connect: { id: 'cm4vpmu1d0007uiyd9f9ti7ar' } } },
				{ color: { connect: { id: 'cm4vpmu1d000auiydobchwscq' } } },
				{ color: { connect: { id: 'cm4vpmu1d0002uiydc03b8pps' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00013z49tbk0xbgy' } } },
				{ size: { connect: { id: 'cm4vq56zl00033z49gzgs3pxi' } } },
				{ size: { connect: { id: 'cm4vq56zl00073z49cxnip7le' } } }
			]
		}
	},
	{
		name: 'Brown T-Shirt',
		brand: 'Woden',
		price: 30,
		description:
			'Classic brown polo with refined details. Features breathable pique cotton and perfect fit. Ideal for casual business settings or weekend gatherings.',
		images: [
			'/uploads/products/Polo-T-Shirt.jpg',
			'/uploads/products/Polo-T-Shirt.jpg',
			'/uploads/products/Polo-T-Shirt.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10002drxzmeligjk2' } },
		dressStyle: { connect: { id: 'cm4vpnff00002qo6teyyu33pt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } },
				{ color: { connect: { id: 'cm4vpmu1d0007uiyd9f9ti7ar' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00053z49eq82x818' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } },
				{ size: { connect: { id: 'cm4vq56zl00083z49uprk2k19' } } }
			]
		}
	},
	{
		name: 'Brown Plain T-Shirt',
		brand: 'Nike',
		price: 50,
		description:
			'Minimalist brown t-shirt with superior craftsmanship. Features premium cotton and perfect drape. Essential wardrobe staple for versatile styling.',
		images: [
			'/uploads/products/Plain-T-Shirt.jpg',
			'/uploads/products/Plain-T-Shirt.jpg',
			'/uploads/products/Plain-T-Shirt.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10009drxzhpw13put' } },
		dressStyle: { connect: { id: 'cm4vpnff00002qo6teyyu33pt' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d0003uiydx9uhfu5m' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00053z49eq82x818' } } },
				{ size: { connect: { id: 'cm4vq56zk00003z49dvtvycmg' } } },
				{ size: { connect: { id: 'cm4vq56zl00033z49gzgs3pxi' } } }
			]
		}
	},
	{
		name: 'Printed T-Shirts',
		brand: 'MM',
		price: 25,
		description:
			'Eye-catching printed tee with artistic design elements. Features soft, breathable fabric and modern fit. Perfect for making a bold fashion statement.',
		images: [
			'/uploads/products/Printed-T-Shirts.jpg',
			'/uploads/products/Printed-T-Shirts.jpg',
			'/uploads/products/Printed-T-Shirts.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10001drxza6r5efwd' } },
		dressStyle: { connect: { id: 'cm4vpnff00004qo6tpxr9r643' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0005uiydbpxr01ik' } } },
				{ color: { connect: { id: 'cm4vpmu1c0000uiydqbipzvzi' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00053z49eq82x818' } } },
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } }
			]
		}
	},
	{
		name: 'Sweetshirt Mange',
		brand: 'Nike',
		price: 45,
		description:
			'Contemporary sweatshirt with innovative design details. Features comfortable terry fabric and refined finishing. Perfect for urban lifestyle and casual occasions.',
		images: [
			'/uploads/products/Sweetshirtmange.jpg',
			'/uploads/products/Sweetshirtmange.jpg',
			'/uploads/products/Sweetshirtmange.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10005drxzsar46qys' } },
		dressStyle: { connect: { id: 'cm4vpnff00005qo6tuvko6q41' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0001uiydneanb22w' } } },
				{ color: { connect: { id: 'cm4vpmu1d0007uiyd9f9ti7ar' } } },
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00023z49fr0w6hdo' } } },
				{ size: { connect: { id: 'cm4vq56zl00073z49cxnip7le' } } },
				{ size: { connect: { id: 'cm4vq56zl00083z49uprk2k19' } } }
			]
		}
	},
	{
		name: 'Yellow Sweatshirt.jpg',
		brand: 'Woden',
		price: 85,
		description:
			'Vibrant yellow sweatshirt with modern cut. Features premium cotton blend and detailed stitching. Perfect for adding a bright accent to casual outfits.',
		images: [
			'/uploads/products/Yellow-Sweatshirt.jpg',
			'/uploads/products/Yellow-Sweatshirt.jpg',
			'/uploads/products/Yellow-Sweatshirt.jpg'
		],
		gender: EnumGender.MALE,
		type: EnumProductType.BASE,
		category: { connect: { id: 'cm4vpn4p10000drxz7iuahxu4' } },
		dressStyle: { connect: { id: 'cm4vpnff00004qo6tpxr9r643' } },
		productColors: {
			create: [
				{ color: { connect: { id: 'cm4vpmu1d0008uiydqvima3do' } } },
				{ color: { connect: { id: 'cm4vpmu1d0006uiydykta326u' } } },
				{ color: { connect: { id: 'cm4vpmu1d000auiydobchwscq' } } },
				{ color: { connect: { id: 'cm4vpmu1d000buiydrh173a9a' } } }
			]
		},
		productSizes: {
			create: [
				{ size: { connect: { id: 'cm4vq56zl00013z49tbk0xbgy' } } },
				{ size: { connect: { id: 'cm4vq56zl00033z49gzgs3pxi' } } },
				{ size: { connect: { id: 'cm4vq56zl00063z49zkqul59x' } } }
			]
		}
	}
]
