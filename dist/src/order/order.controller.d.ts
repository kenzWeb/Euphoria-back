import { OrderDto } from './dto/order.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    checkout(dto: OrderDto, userId: string): Promise<import("@a2seven/yoo-checkout").Payment>;
    updateOrederStatus(dto: PaymentStatusDto): Promise<true | import("@a2seven/yoo-checkout").Payment>;
    getMyOrders(userId: string): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            productId: string | null;
            quantity: number;
            orderId: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        total: number;
    })[]>;
}
