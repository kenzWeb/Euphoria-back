"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTS = void 0;
const client_1 = require("@prisma/client");
exports.PRODUCTS = [
    {
        name: 'Black Activewear',
        brand: 'Nike',
        price: 25,
        description: 'Premium athletic wear featuring breathable fabric and sleek black design. Perfect for high-intensity workouts or casual sport activities. Engineered for maximum comfort and mobility.',
        images: ['/uploads/products/Activewear.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30002c9751jyqb7dp' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0005c99vofgehrq3' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } },
                { color: { connect: { id: 'cmbaxl03b0001c909xonlylsn' } } },
                { color: { connect: { id: 'cmbaxl03b0003c9091qzoql3z' } } },
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } },
                { size: { connect: { id: 'cmbaxl8bd0007c93xj5oyujvq' } } }
            ]
        }
    },
    {
        name: 'Barboreal Gray Sweats',
        brand: 'Paypal',
        price: 50,
        description: 'Luxurious gray sweatpants with a modern tapered fit. Features soft-touch fabric and adjustable waistband for all-day comfort. Ideal for both active lifestyles and relaxed weekends.',
        images: ['/uploads/products/Barboreal-Gray-Sweats.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30006c9752v6vn5tw' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0004c99vt98d8udr' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0003c9091qzoql3z' } } },
                { color: { connect: { id: 'cmbaxl03b0005c9091kfpv8f1' } } },
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } },
                { color: { connect: { id: 'cmbaxl03b000bc909r2lwuyvo' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0002c93xxognwdtu' } } },
                { size: { connect: { id: 'cmbaxl8bd0000c93xzlnofjr6' } } }
            ]
        }
    },
    {
        name: 'Black Shorts',
        brand: 'MM',
        price: 45,
        description: 'High-performance athletic shorts with moisture-wicking technology. Features a flattering cut and hidden pocket design. Perfect for running, gym workouts, or summer activities.',
        images: ['/uploads/products/Black-Shorts.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga3000dc975as9g6buv' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0001c99vh7fqwdzv' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0005c9091kfpv8f1' } } },
                { color: { connect: { id: 'cmbaxl03b0003c9091qzoql3z' } } },
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } },
                { color: { connect: { id: 'cmbaxl03b0005c9091kfpv8f1' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0003c93xn10b41wr' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0004c93xz3vwzt78' } } }
            ]
        }
    },
    {
        name: 'Blue Flower Print Crop',
        brand: 'Nike',
        price: 15,
        description: 'Stylish cropped top with an elegant floral pattern. Made with stretchy, breathable fabric for maximum comfort. Perfect for yoga sessions or casual summer outings.',
        images: ['/uploads/products/Blue-Flower-Print-Crop.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30004c975pbp1rlnz' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0002c99vkz3tzumf' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0005c9091kfpv8f1' } } },
                { color: { connect: { id: 'cmbaxl03b0004c9097b29s9xr' } } },
                { color: { connect: { id: 'cmbaxl03b0006c909rbn1vaq6' } } },
                { color: { connect: { id: 'cmbaxl03b0009c90913roxw78' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0002c93xxognwdtu' } } },
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } }
            ]
        }
    },
    {
        name: 'White Boxers',
        brand: 'Woden',
        price: 55,
        description: 'Premium cotton boxers with ergonomic design for maximum comfort. Features moisture-wicking technology and a secure waistband. Perfect blend of style and functionality.',
        images: ['/uploads/products/Boxers.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30003c97512xh9vgy' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0003c99vxi5gzt1e' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0002c909ypzpaczy' } } },
                { color: { connect: { id: 'cmbaxl03b000ac909z3s8i3ja' } } },
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0004c93xz3vwzt78' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } }
            ]
        }
    },
    {
        name: 'Checks Shirt with white',
        brand: 'MM',
        price: 65,
        description: 'Classic checkered shirt with contemporary styling. Features high-quality cotton blend fabric and precise tailoring. Perfect for casual office wear or weekend outings.',
        images: ['/uploads/products/Checks-Shirt-with-white.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga3000ec975b8p5r7xc' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0001c99vh7fqwdzv' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0004c9097b29s9xr' } } },
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } },
                { color: { connect: { id: 'cmbaxl03b0002c909ypzpaczy' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0001c93x1utnk869' } } },
                { size: { connect: { id: 'cmbaxl8bd0000c93xzlnofjr6' } } },
                { size: { connect: { id: 'cmbaxl8bd0000c93xzlnofjr6' } } }
            ]
        }
    },
    {
        name: 'Pink Coats',
        brand: 'Woden',
        price: 49,
        description: 'Elegant pink winter coat with modern silhouette. Features warm insulation and water-resistant exterior. Perfect for staying stylish during cold weather seasons.',
        images: ['/uploads/products/Coats-&-Parkas.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30003c97512xh9vgy' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0003c99vxi5gzt1e' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0006c909rbn1vaq6' } } },
                { color: { connect: { id: 'cmbaxl03b000bc909r2lwuyvo' } } },
                { color: { connect: { id: 'cmbaxl03b0004c9097b29s9xr' } } },
                { color: { connect: { id: 'cmbaxl03b000bc909r2lwuyvo' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0001c93x1utnk869' } } },
                { size: { connect: { id: 'cmbaxl8bd0007c93xj5oyujvq' } } },
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } }
            ]
        }
    },
    {
        name: 'Flower Pattern Black',
        brand: 'MM',
        price: 53,
        description: 'Sophisticated black dress with delicate flower patterns. Features flattering cut and premium fabric blend. Perfect for special occasions or elegant evening events.',
        images: ['/uploads/products/Blue-Flower-Print-Crop.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30004c975pbp1rlnz' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0002c99vkz3tzumf' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0005c9091kfpv8f1' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } },
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0004c93xz3vwzt78' } } },
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0002c93xxognwdtu' } } }
            ]
        }
    },
    {
        name: 'Graphic T-shirt',
        brand: 'Nisargi',
        price: 73,
        description: 'Creative graphic tee featuring unique artistic design. Made with soft, durable cotton for lasting comfort. Perfect for expressing individual style in casual settings.',
        images: ['/uploads/products/Graphic-T-shirt.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga3000cc975ajgmalmr' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0005c99vofgehrq3' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0001c909xonlylsn' } } },
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } },
                { color: { connect: { id: 'cmbaxl03b0002c909ypzpaczy' } } },
                { color: { connect: { id: 'cmbaxl03b000bc909r2lwuyvo' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0004c93xz3vwzt78' } } },
                { size: { connect: { id: 'cmbaxl8bd0004c93xz3vwzt78' } } }
            ]
        }
    },
    {
        name: 'Green Hoodies Sweetshirt',
        brand: 'Mellon',
        price: 60,
        description: 'Cozy green hoodie with modern street-style design. Features warm fleece lining and convenient kangaroo pocket. Perfect for casual outings or relaxed weekends.',
        images: ['/uploads/products/Hoodies-&-Sweetshirt.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga20000c975140xqaab' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0001c99vh7fqwdzv' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0003c9091qzoql3z' } } },
                { color: { connect: { id: 'cmbaxl03b0004c9097b29s9xr' } } },
                { color: { connect: { id: 'cmbaxl03b000ac909z3s8i3ja' } } },
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0001c93x1utnk869' } } },
                { size: { connect: { id: 'cmbaxl8bd0002c93xxognwdtu' } } }
            ]
        }
    },
    {
        name: 'Leaves Pattern',
        brand: 'Nike',
        price: 50,
        description: 'Nature-inspired dress with elegant leaf motifs. Features lightweight, flowing fabric and feminine silhouette. Perfect for spring and summer occasions.',
        images: ['/uploads/products/Leaves-Pattern.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30009c975ctgtjggd' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0002c99vkz3tzumf' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0004c9097b29s9xr' } } },
                { color: { connect: { id: 'cmbaxl03b000ac909z3s8i3ja' } } },
                { color: { connect: { id: 'cmbaxl03b000bc909r2lwuyvo' } } },
                { color: { connect: { id: 'cmbaxl03b0006c909rbn1vaq6' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0002c93xxognwdtu' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0000c93xzlnofjr6' } } }
            ]
        }
    },
    {
        name: 'Levende Hoodie',
        brand: 'AS',
        price: 70,
        description: 'Fashion-forward hoodie with contemporary design elements. Features premium blend fabric and detailed finishing. Perfect for style-conscious casual wear.',
        images: ['/uploads/products/Levende-Hoodie.jpg'],
        gender: client_1.EnumGender.FEMALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga3000ac975gkvex42g' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0002c99vkz3tzumf' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } },
                { color: { connect: { id: 'cmbaxl03b0005c9091kfpv8f1' } } },
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } },
                { color: { connect: { id: 'cmbaxl03a0000c909om9r1nse' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0001c93x1utnk869' } } }
            ]
        }
    },
    {
        name: 'Brown T-Shirt',
        brand: 'Woden',
        price: 30,
        description: 'Classic brown polo with refined details. Features breathable pique cotton and perfect fit. Ideal for casual business settings or weekend gatherings.',
        images: ['/uploads/products/Polo-T-Shirt.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30001c975gubnw81v' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0003c99vxi5gzt1e' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0001c909xonlylsn' } } },
                { color: { connect: { id: 'cmbaxl03b0006c909rbn1vaq6' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } }
            ]
        }
    },
    {
        name: 'Brown Plain T-Shirt',
        brand: 'Nike',
        price: 50,
        description: 'Minimalist brown t-shirt with superior craftsmanship. Features premium cotton and perfect drape. Essential wardrobe staple for versatile styling.',
        images: ['/uploads/products/Plain-T-Shirt.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30008c9750j44nab1' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0004c99vt98d8udr' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b000ac909z3s8i3ja' } } },
                { color: { connect: { id: 'cmbaxl03b0001c909xonlylsn' } } },
                { color: { connect: { id: 'cmbaxl03b000ac909z3s8i3ja' } } },
                { color: { connect: { id: 'cmbaxl03b0004c9097b29s9xr' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0003c93xn10b41wr' } } }
            ]
        }
    },
    {
        name: 'Printed T-Shirts',
        brand: 'MM',
        price: 25,
        description: 'Eye-catching printed tee with artistic design elements. Features soft, breathable fabric and modern fit. Perfect for making a bold fashion statement.',
        images: ['/uploads/products/Printed-T-Shirts.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30007c975vij3yvo2' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0000c99vgq7ssuru' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0006c909rbn1vaq6' } } },
                { color: { connect: { id: 'cmbaxl03b0002c909ypzpaczy' } } },
                { color: { connect: { id: 'cmbaxl03b0003c9091qzoql3z' } } },
                { color: { connect: { id: 'cmbaxl03b0006c909rbn1vaq6' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } },
                { size: { connect: { id: 'cmbaxl8bd0005c93xec235sa3' } } }
            ]
        }
    },
    {
        name: 'Sweetshirt Mange',
        brand: 'Nike',
        price: 45,
        description: 'Contemporary sweatshirt with innovative design details. Features comfortable terry fabric and refined finishing. Perfect for urban lifestyle and casual occasions.',
        images: ['/uploads/products/Sweetshirtmange.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30004c975pbp1rlnz' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0003c99vxi5gzt1e' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } },
                { color: { connect: { id: 'cmbaxl03b0002c909ypzpaczy' } } },
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } },
                { color: { connect: { id: 'cmbaxl03b0001c909xonlylsn' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0001c93x1utnk869' } } },
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0006c93x0dpsfmj7' } } }
            ]
        }
    },
    {
        name: 'Yellow Sweatshirt',
        brand: 'Woden',
        price: 85,
        description: 'Vibrant yellow sweatshirt with modern cut. Features premium cotton blend and detailed stitching. Perfect for adding a bright accent to casual outfits.',
        images: ['/uploads/products/Yellow-Sweatshirt.jpg'],
        gender: client_1.EnumGender.MALE,
        type: client_1.EnumProductType.BASE,
        category: { connect: { id: 'cmbaxlga30007c975vij3yvo2' } },
        dressStyle: { connect: { id: 'cmbaxlmyj0002c99vkz3tzumf' } },
        productColors: {
            create: [
                { color: { connect: { id: 'cmbaxl03b0002c909ypzpaczy' } } },
                { color: { connect: { id: 'cmbaxl03b0008c909vgc0kk90' } } },
                { color: { connect: { id: 'cmbaxl03b0009c90913roxw78' } } },
                { color: { connect: { id: 'cmbaxl03b0007c909ws2a7yi2' } } }
            ]
        },
        productSizes: {
            create: [
                { size: { connect: { id: 'cmbaxl8bd0008c93xd6f2en48' } } },
                { size: { connect: { id: 'cmbaxl8bd0000c93xzlnofjr6' } } },
                { size: { connect: { id: 'cmbaxl8bd0000c93xzlnofjr6' } } }
            ]
        }
    }
];
//# sourceMappingURL=product.data.js.map