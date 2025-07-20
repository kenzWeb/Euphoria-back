import { EnumGender } from '@prisma/client';
export declare class ColorDto {
    id: string;
}
export declare class SizeDto {
    id: string;
}
export declare class ProductDto {
    name: string;
    brand: string;
    description: string;
    price: number;
    gender: EnumGender;
    styleId?: string;
    colors?: ColorDto[];
    images: string[];
    sizes?: SizeDto[];
}
