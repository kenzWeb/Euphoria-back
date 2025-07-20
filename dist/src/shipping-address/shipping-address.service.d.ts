import { PrismaService } from 'src/prisma.service';
import { ShippingAddressDto } from './dto/shipping-address.dto';
export declare class ShippingAddressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getByUserId(userId: string): Promise<{
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
    }[]>;
    addAddress(userId: string, dto: ShippingAddressDto): Promise<{
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
    }>;
    deleteAddress(userId: string, addressId: string): Promise<{
        message: string;
    }>;
}
