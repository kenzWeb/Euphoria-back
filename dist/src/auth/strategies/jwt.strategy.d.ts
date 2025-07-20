import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<{
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
}
export {};
