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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.category.findMany({
            include: {
                products: true
            }
        });
    }
    async getById(id) {
        const category = await this.prisma.category.findUnique({
            where: {
                id
            },
            include: {
                products: true
            }
        });
        if (!category)
            throw new common_1.NotFoundException('Category not found');
        return category;
    }
    async create(dto) {
        return this.prisma.category.create({
            data: {
                name: dto.name
            },
            include: {
                products: true
            }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        return this.prisma.category.update({
            where: { id },
            data: dto
        });
    }
    async delete(id) {
        await this.getById(id);
        return this.prisma.category.delete({
            where: { id }
        });
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
//# sourceMappingURL=category.service.js.map