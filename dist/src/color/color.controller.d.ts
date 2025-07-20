import { ColorService } from './color.service';
import { ColorDto } from './dto/color.dto';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    getAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
    }>;
    create(dto: ColorDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
    }>;
    update(id: string, dto: ColorDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        value: string;
    }>;
}
