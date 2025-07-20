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
exports.ShippingAddressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ShippingAddressService = class ShippingAddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getByUserId(userId) {
        const addresses = await this.prisma.shippingAddress.findMany({
            where: { userId }
        });
        if (!addresses) {
            throw new common_1.NotFoundException('No shipping addresses found for this user');
        }
        return addresses;
    }
    async addAddress(userId, dto) {
        const address = await this.prisma.shippingAddress.create({
            data: {
                ...dto,
                user: {
                    connect: { id: userId }
                }
            }
        });
        if (!address) {
            throw new Error('Failed to add shipping address');
        }
        return address;
    }
    async deleteAddress(userId, addressId) {
        const address = await this.prisma.shippingAddress.findUnique({
            where: { id: addressId, userId }
        });
        if (!address) {
            throw new common_1.NotFoundException('Shipping address not found');
        }
        await this.prisma.shippingAddress.delete({
            where: { id: addressId }
        });
        return { message: 'Shipping address deleted successfully' };
    }
};
exports.ShippingAddressService = ShippingAddressService;
exports.ShippingAddressService = ShippingAddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShippingAddressService);
//# sourceMappingURL=shipping-address.service.js.map