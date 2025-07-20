import { EnumGender } from '@prisma/client';
import { PaginationDto } from 'src/pagination/pagination.dto';
export declare enum EnumProductSort {
    HIGH_PRICE = "high-price",
    LOW_PRICE = "low-price",
    NEWEST = "newest",
    OLDEST = "oldest"
}
export declare class FilterDto extends PaginationDto {
    categoryId?: string;
    category?: string;
    styleId?: string;
    style?: string;
    gender?: EnumGender;
    minPrice?: string;
    maxPrice?: string;
    colors?: string | string[];
    sizes?: string | string[];
    sort?: EnumProductSort;
    searchTerm?: string;
}
