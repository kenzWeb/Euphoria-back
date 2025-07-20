import { PrismaService } from 'src/prisma.service';
import { dressStyleDto } from './dto/dress-style.dto';
export declare class DressStyleService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<({
        products: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
    })[]>;
    getById(id: string): Promise<{
        products: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
    }>;
    create(dto: dressStyleDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
    }>;
    update(id: string, dto: dressStyleDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string | null;
    }>;
}
