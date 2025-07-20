import { UserPasswordDto } from './dto/user.password.dto';
import { UserUpdateDto } from './dto/user.update.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<{
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
    updateProfile(id: string, dto: UserUpdateDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
        shippingAddressId: string | null;
    }>;
    updatePassword(id: string, dto: UserPasswordDto): Promise<{
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
}
