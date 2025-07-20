import { EnumGender, EnumProductType } from '@prisma/client';
import { PaginationService } from 'src/pagination/pagination.service';
import { PrismaService } from 'src/prisma.service';
import { FilterDto } from './dto/filter.dto';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    private paginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto?: FilterDto): Promise<{
        data: ({
            productColors: ({
                color: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    value: string;
                };
            } & {
                id: string;
                colorId: string;
                userId: string | null;
                productId: string;
            })[];
            productSizes: ({
                size: {
                    id: string;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                userId: string | null;
                sizeId: string;
                productId: string;
            })[];
            category: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
            dressStyle: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                categoryId: string | null;
            };
            orderItems: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                productId: string | null;
                quantity: number;
                orderId: string | null;
            }[];
        } & {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string | null;
            userId: string | null;
            brand: string;
            price: number;
            description: string;
            images: string[];
            gender: import(".prisma/client").$Enums.EnumGender;
            type: import(".prisma/client").$Enums.EnumProductType | null;
            styleId: string | null;
        })[];
        length: number;
    }>;
    getById(id: string): Promise<{
        productColors: ({
            color: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                value: string;
            };
        } & {
            id: string;
            colorId: string;
            userId: string | null;
            productId: string;
        })[];
        productSizes: ({
            size: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            userId: string | null;
            sizeId: string;
            productId: string;
        })[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        dressStyle: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string | null;
        };
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            productId: string | null;
            quantity: number;
            orderId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    }>;
    getByCategory(category: string): Promise<({
        productColors: ({
            color: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                value: string;
            };
        } & {
            id: string;
            colorId: string;
            userId: string | null;
            productId: string;
        })[];
        productSizes: ({
            size: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            userId: string | null;
            sizeId: string;
            productId: string;
        })[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    getByCategoryId(categoryId: string): Promise<({
        productColors: ({
            color: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                value: string;
            };
        } & {
            id: string;
            colorId: string;
            userId: string | null;
            productId: string;
        })[];
        productSizes: ({
            size: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            userId: string | null;
            sizeId: string;
            productId: string;
        })[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    getByStyle(style: string): Promise<({
        productColors: ({
            color: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                value: string;
            };
        } & {
            id: string;
            colorId: string;
            userId: string | null;
            productId: string;
        })[];
        productSizes: ({
            size: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            userId: string | null;
            sizeId: string;
            productId: string;
        })[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        dressStyle: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string | null;
        };
        orderItems: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            productId: string | null;
            quantity: number;
            orderId: string | null;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    getByStyleId(styleId: string): Promise<({
        productColors: ({
            color: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                value: string;
            };
        } & {
            id: string;
            colorId: string;
            userId: string | null;
            productId: string;
        })[];
        productSizes: ({
            size: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            userId: string | null;
            sizeId: string;
            productId: string;
        })[];
        dressStyle: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string | null;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    getByType(type: EnumProductType): Promise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    getByGender(gender: EnumGender): Promise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    getSimilar(id: string): Promise<({
        productColors: ({
            color: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                value: string;
            };
        } & {
            id: string;
            colorId: string;
            userId: string | null;
            productId: string;
        })[];
        productSizes: ({
            size: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            userId: string | null;
            sizeId: string;
            productId: string;
        })[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    })[]>;
    create(dto: ProductDto, categoryId?: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    }>;
    update(id: string, dto: ProductDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
        userId: string | null;
        brand: string;
        price: number;
        description: string;
        images: string[];
        gender: import(".prisma/client").$Enums.EnumGender;
        type: import(".prisma/client").$Enums.EnumProductType | null;
        styleId: string | null;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
