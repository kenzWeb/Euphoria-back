import { ShippingAddressDto } from './dto/shipping-address.dto';
import { ShippingAddressService } from './shipping-address.service';
export declare class ShippingAddressController {
    private readonly shippingAddressService;
    constructor(shippingAddressService: ShippingAddressService);
    getShippingAddresses(userId: string): Promise<{
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
    addShippingAddress(userId: string, dto: ShippingAddressDto): Promise<{
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
    deleteShippingAddress(userId: string, addressId: string): Promise<{
        message: string;
    }>;
}
