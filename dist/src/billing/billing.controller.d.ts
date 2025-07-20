import { BillingService } from './billing.service';
import { BillingDto } from './dto/billing.dto';
export declare class BillingController {
    private readonly billingService;
    constructor(billingService: BillingService);
    checkBilling(dto: BillingDto, userId: string, isSave?: string): Promise<{
        isValid: boolean;
        message: string;
        billing?: undefined;
    } | {
        isValid: boolean;
        message: string;
        billing: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            firstName: string;
            lastName: string;
            company: string | null;
            streetAddress: string;
            city: string;
            phone: string;
            postalCode: string;
            country: string;
            apartment: string | null;
        };
    }>;
}
