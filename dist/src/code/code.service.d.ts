import { PrismaService } from 'src/prisma.service';
import { CodeDto } from './dto/code.dto';
export declare class CodeService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCodes(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        code: string;
    }[]>;
    getCode(code: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        code: string;
    }>;
    createCode(dto: CodeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        code: string;
    }>;
}
