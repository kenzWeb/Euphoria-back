import { PrismaService } from 'src/prisma.service';
import { ColorDto } from './dto/color.dto';
export declare class ColorService {
    private prisma;
    constructor(prisma: PrismaService);
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
