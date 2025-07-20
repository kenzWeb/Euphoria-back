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
exports.ArrivalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ArrivalService = class ArrivalService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.arrival.findMany();
    }
    getById(id) {
        return this.prisma.arrival.findUnique({
            where: {
                id
            }
        });
    }
    create(ArrivalDto) {
        return this.prisma.arrival.create({
            data: {
                title: ArrivalDto.title,
                img: ArrivalDto.img
            }
        });
    }
    update(id, ArrivalDto) {
        return this.prisma.arrival.update({
            where: {
                id
            },
            data: {
                title: ArrivalDto.title,
                img: ArrivalDto.img
            }
        });
    }
    remove(id) {
        return this.prisma.arrival.delete({
            where: {
                id
            },
            select: {
                title: true,
                img: true
            }
        });
    }
};
exports.ArrivalService = ArrivalService;
exports.ArrivalService = ArrivalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArrivalService);
//# sourceMappingURL=arrival.service.js.map