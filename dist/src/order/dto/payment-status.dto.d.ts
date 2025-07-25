declare class AmountPayment {
    value: string;
    currency: string;
}
declare class ObjectPayment {
    id: string;
    status: string;
    amount: AmountPayment;
    payment_method: {
        type: string;
        id: string;
        saved: boolean;
        title: string;
        card: object;
    };
    created_at: string;
    expires_at: string;
    description: string;
}
export declare class PaymentStatusDto {
    event: 'payment.succeeded' | 'payment.waiting_for_capture' | 'payment.canceled' | 'refund.succeeded';
    type: string;
    object: ObjectPayment;
}
export {};
