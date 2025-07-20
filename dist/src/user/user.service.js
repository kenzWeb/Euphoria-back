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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const argon2_1 = require("argon2");
const prisma_service_1 = require("../prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                favorites: {
                    include: {
                        productColors: { include: { color: true } },
                        productSizes: { include: { size: true } }
                    }
                },
                orders: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } },
                shippingAddress: true
            }
        });
        return user;
    }
    async getByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            },
            include: {
                favorites: {
                    include: {
                        productColors: { include: { color: true } },
                        productSizes: { include: { size: true } }
                    }
                },
                orders: true,
                shippingAddress: true
            }
        });
        return user;
    }
    async toggleFavorite(userId, productId) {
        const user = await this.getById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isExists = user.favorites?.some(product => product.id === productId) || false;
        await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                favorites: {
                    [isExists ? 'disconnect' : 'connect']: {
                        id: productId
                    }
                }
            },
            include: {
                favorites: {
                    include: {
                        productColors: { include: { color: true } },
                        productSizes: { include: { size: true } }
                    }
                },
                orders: true
            }
        });
        return {
            message: isExists ? 'Removed from favorites' : 'Added to favorites'
        };
    }
    async updateProfile(userId, dto) {
        const user = await this.getById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (dto.email) {
            const existingUser = await this.getByEmail(dto.email);
            if (existingUser && existingUser.id !== user.id) {
                throw new common_1.ConflictException('Email already exists');
            }
        }
        if (dto.email === user.email) {
            throw new common_1.ConflictException('Email is the same as current one');
        }
        if (dto.name && dto.name.length < 2) {
            throw new common_1.BadRequestException('Name must be at least 2 characters long');
        }
        if (dto.name === user.name) {
            throw new common_1.ConflictException('Name is the same as current one');
        }
        return this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                name: dto.name,
                email: dto.email
            }
        });
    }
    async changePassword(userId, dto) {
        const user = await this.getById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (dto.newPassword.length < 6) {
            throw new common_1.BadRequestException('New password must be at least 6 characters long');
        }
        if (dto.oldPassword === dto.newPassword) {
            throw new common_1.ConflictException('New password cannot be the same as old one');
        }
        const isPasswordValid = (await (0, argon2_1.hash)(dto.oldPassword)) === user.password;
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('Old password is incorrect');
        }
        return this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                password: await (0, argon2_1.hash)(dto.newPassword)
            }
        });
    }
    async create(dto) {
        return this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: await (0, argon2_1.hash)(dto.password)
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map