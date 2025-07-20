import { PrismaService } from 'src/prisma.service';
import { BillingDto } from './dto/billing.dto';
export declare class BillingService {
    private prisma;
    constructor(prisma: PrismaService);
    checkBilling(dto: BillingDto, isSave: boolean, userId: string): Promise<{
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
