import { CodeService } from './code.service';
import { CodeDto } from './dto/code.dto';
export declare class CodeController {
    private readonly codeService;
    constructor(codeService: CodeService);
    getAllCodes(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        code: string;
    }[]>;
    getByCode(code: string): Promise<{
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
