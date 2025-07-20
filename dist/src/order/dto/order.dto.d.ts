import { OrderStatus } from '@prisma/client';
export declare class OrderDto {
    status: OrderStatus;
    items: OrderItemDto[];
}
export declare class OrderItemDto {
    quantity: number;
    price: number;
    productId: string;
}
