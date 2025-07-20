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
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BillingService = class BillingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkBilling(dto, isSave, userId) {
        try {
            const isValid = Boolean(dto.firstName &&
                dto.lastName &&
                dto.country &&
                dto.streetAddress &&
                dto.city &&
                dto.postalCode &&
                dto.phone);
            if (!isValid) {
                return {
                    isValid: false,
                    message: 'Invalid billing data'
                };
            }
            if (isSave) {
                const billing = await this.prisma.billing.create({
                    data: {
                        firstName: dto.firstName,
                        lastName: dto.lastName,
                        country: dto.country,
                        company: dto.company,
                        streetAddress: dto.streetAddress,
                        apartment: dto.apartment,
                        city: dto.city,
                        postalCode: dto.postalCode,
                        phone: dto.phone,
                        user: {
                            connect: {
                                id: userId
                            }
                        }
                    }
                });
                return {
                    isValid: true,
                    message: 'Billing data is valid and saved',
                    billing: billing
                };
            }
            return {
                isValid: true,
                message: 'Billing data is valid'
            };
        }
        catch (error) {
            console.error('Error in checkBilling:', error);
            return {
                isValid: false,
                message: 'Error occurred while checking billing data'
            };
        }
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BillingService);
//# sourceMappingURL=billing.service.js.map