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
exports.SizeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let SizeService = class SizeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.size.findMany();
    }
    async getById(id) {
        const size = await this.prisma.size.findUnique({
            where: { id }
        });
        if (!size)
            throw new common_1.NotFoundException('Size not found');
        return size;
    }
    async create(dto) {
        const isExists = await this.prisma.size.findFirst({
            where: { name: dto.name }
        });
        if (isExists)
            throw new common_1.BadRequestException('Size already exists');
        return this.prisma.size.create({
            data: {
                name: dto.name
            }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        return this.prisma.size.update({
            where: { id },
            data: {
                name: dto.name
            }
        });
    }
    async delete(id) {
        await this.getById(id);
        return this.prisma.size.delete({
            where: { id }
        });
    }
};
exports.SizeService = SizeService;
exports.SizeService = SizeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SizeService);
//# sourceMappingURL=size.service.js.map