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
exports.ZoneService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ZoneService = class ZoneService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.zone.findMany();
    }
    getById(id) {
        return this.prisma.zone.findUnique({
            where: {
                id
            }
        });
    }
    create(ZoneDto) {
        return this.prisma.zone.create({
            data: {
                title: ZoneDto.title,
                description: ZoneDto.description,
                price: ZoneDto.price,
                img: ZoneDto.image
            }
        });
    }
    update(id, ZoneDto) {
        return this.prisma.zone.update({
            where: {
                id
            },
            data: {
                title: ZoneDto.title,
                description: ZoneDto.description,
                price: ZoneDto.price,
                img: ZoneDto.image
            }
        });
    }
    remove(id) {
        return this.prisma.zone.delete({
            where: {
                id
            },
            select: {
                title: true,
                description: true,
                price: true,
                img: true
            }
        });
    }
};
exports.ZoneService = ZoneService;
exports.ZoneService = ZoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ZoneService);
//# sourceMappingURL=zone.service.js.map