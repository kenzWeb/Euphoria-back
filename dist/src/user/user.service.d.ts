import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserPasswordDto } from './dto/user.password.dto';
import { UserUpdateDto } from './dto/user.update.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        shippingAddress: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            firstName: string;
            lastName: string;
            region: string;
            company: string | null;
            streetAddress: string;
            suite: string;
            city: string;
            state: string;
            phone: string;
            postalCode: string;
            instruction: string | null;
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            status: import(".prisma/client").$Enums.OrderStatus;
            total: number;
        }[];
        favorites: ({
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
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
        shippingAddressId: string | null;
    }>;
    getByEmail(email: string): Promise<{
        shippingAddress: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            firstName: string;
            lastName: string;
            region: string;
            company: string | null;
            streetAddress: string;
            suite: string;
            city: string;
            state: string;
            phone: string;
            postalCode: string;
            instruction: string | null;
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            status: import(".prisma/client").$Enums.OrderStatus;
            total: number;
        }[];
        favorites: ({
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
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
        shippingAddressId: string | null;
    }>;
    toggleFavorite(userId: string, productId: string): Promise<{
        message: string;
    }>;
    updateProfile(userId: string, dto: UserUpdateDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
        shippingAddressId: string | null;
    }>;
    changePassword(userId: string, dto: UserPasswordDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
        shippingAddressId: string | null;
    }>;
    create(dto: AuthDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
        shippingAddressId: string | null;
    }>;
}
