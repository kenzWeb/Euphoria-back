"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CodeService = class CodeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCodes() {
        const codes = await this.prisma.promoCode.findMany();
        if (!codes || codes.length === 0) {
            throw new common_1.NotFoundException('No promo codes found');
        }
        return codes;
    }
    async getCode(code) {
        if (!code && !code.length) {
            throw new common_1.BadRequestException('Promo code must be provided');
        }
        const codeData = await this.prisma.promoCode.findUnique({
            where: {
                code: code
            }
        });
        if (!codeData) {
            throw new common_1.NotFoundException('Promo code not found');
        }
        return codeData;
    }
    async createCode(dto) {
        const oldCode = await this.prisma.promoCode.findUnique({
            where: {
                code: dto.code
            }
        });
        if (oldCode) {
            throw new common_1.NotFoundException('Promo code already exists');
        }
        const codeData = await this.prisma.promoCode.create({
            data: {
                code: dto.code,
                value: dto.value
            }
        });
        return codeData;
    }
};
exports.CodeService = CodeService;
exports.CodeService = CodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CodeService);
//# sourceMappingURL=code.service.js.map