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
exports.DressStyleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DressStyleService = class DressStyleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.dressStyle.findMany({
            include: {
                products: true
            }
        });
    }
    async getById(id) {
        const category = await this.prisma.dressStyle.findUnique({
            where: {
                id
            },
            include: {
                products: true
            }
        });
        if (!category)
            throw new common_1.NotFoundException('Dress style not found');
        return category;
    }
    async create(dto) {
        return this.prisma.dressStyle.create({
            data: {
                name: dto.name
            }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        return this.prisma.dressStyle.update({
            where: { id },
            data: dto
        });
    }
    async delete(id) {
        await this.getById(id);
        return this.prisma.dressStyle.delete({
            where: { id }
        });
    }
};
exports.DressStyleService = DressStyleService;
exports.DressStyleService = DressStyleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DressStyleService);
//# sourceMappingURL=dress-style.service.js.map