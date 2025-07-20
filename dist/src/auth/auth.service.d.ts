import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private jwt;
    private userService;
    private prisma;
    private configService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(jwt: JwtService, userService: UserService, prisma: PrismaService, configService: ConfigService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
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
    issueTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    private validateUser;
    validateOAuthLogin(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
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
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
