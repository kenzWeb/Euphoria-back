import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
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
        };
    }>;
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string | null;
            picture: string;
            shippingAddressId: string | null;
        };
    }>;
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
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
        };
    }>;
    logout(res: Response): Promise<boolean>;
    googleAuth(_req: any): Promise<void>;
    googleAuthCallback(req: any, res: Response): Promise<void>;
    yandexAuth(req: any): Promise<void>;
    yandexAuthCallback(req: any, res: Response): Promise<void>;
    checkAuth(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
