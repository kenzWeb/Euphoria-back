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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const pagination_service_1 = require("../pagination/pagination.service");
const prisma_service_1 = require("../prisma.service");
const filter_dto_1 = require("./dto/filter.dto");
let ProductService = class ProductService {
    constructor(prisma, paginationService) {
        this.prisma = prisma;
        this.paginationService = paginationService;
    }
    async getAll(dto = {}) {
        const { perPage, skip } = this.paginationService.getPagination(dto);
        const filters = [];
        if (dto.searchTerm) {
            filters.push({
                OR: [
                    {
                        name: {
                            contains: dto.searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        description: {
                            contains: dto.searchTerm,
                            mode: 'insensitive'
                        }
                    }
                ]
            });
        }
        if (dto.category) {
            const categories = dto.category.split('|');
            filters.push({
                category: {
                    name: {
                        in: categories,
                        mode: 'insensitive'
                    }
                }
            });
        }
        if (dto.style) {
            const styles = dto.style.split('|');
            filters.push({
                dressStyle: {
                    name: {
                        in: styles,
                        mode: 'insensitive'
                    }
                }
            });
        }
        if (dto.categoryId)
            filters.push({ categoryId: dto.categoryId });
        if (dto.styleId)
            filters.push({ styleId: dto.styleId });
        if (dto.gender) {
            filters.push({
                gender: client_1.EnumGender[dto.gender.toUpperCase()]
            });
        }
        if (dto.minPrice || dto.maxPrice) {
            filters.push({
                price: {
                    ...(dto.minPrice ? { gte: +dto.minPrice } : {}),
                    ...(dto.maxPrice ? { lte: +dto.maxPrice } : {})
                }
            });
        }
        if (dto.colors) {
            const colors = typeof dto.colors === 'string' ? dto.colors.split('|') : dto.colors;
            filters.push({
                productColors: {
                    some: {
                        color: {
                            OR: [
                                { id: { in: colors } },
                                { name: { in: colors, mode: 'insensitive' } }
                            ]
                        }
                    }
                }
            });
        }
        if (dto.sizes) {
            const sizes = typeof dto.sizes === 'string' ? dto.sizes.split('|') : dto.sizes;
            filters.push({
                productSizes: {
                    some: {
                        size: {
                            OR: [
                                { id: { in: sizes } },
                                { name: { in: sizes, mode: 'insensitive' } }
                            ]
                        }
                    }
                }
            });
        }
        const orderBy = [];
        switch (dto.sort) {
            case filter_dto_1.EnumProductSort.HIGH_PRICE:
                orderBy.push({ price: 'desc' });
                break;
            case filter_dto_1.EnumProductSort.LOW_PRICE:
                orderBy.push({ price: 'asc' });
                break;
            case filter_dto_1.EnumProductSort.NEWEST:
                orderBy.push({ createdAt: 'desc' });
                break;
            case filter_dto_1.EnumProductSort.OLDEST:
                orderBy.push({ createdAt: 'asc' });
                break;
        }
        const data = await this.prisma.product.findMany({
            where: filters.length ? { AND: filters } : {},
            orderBy: orderBy.length ? orderBy : undefined,
            skip,
            take: perPage,
            include: {
                category: true,
                dressStyle: true,
                orderItems: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            }
        });
        const length = await this.prisma.product.count({
            where: filters.length ? { AND: filters } : {}
        });
        return {
            data,
            length
        };
    }
    async getById(id) {
        return this.prisma.product.findUnique({
            where: { id },
            include: {
                category: true,
                orderItems: true,
                dressStyle: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            }
        });
    }
    async getByCategory(category) {
        const data = await this.prisma.product.findMany({
            where: { category: { name: category } },
            include: {
                category: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            }
        });
        if (!data) {
            throw new Error('Product type not found');
        }
        return data;
    }
    async getByCategoryId(categoryId) {
        const data = await this.prisma.product.findMany({
            where: { categoryId },
            include: {
                category: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            }
        });
        if (!data) {
            throw new Error('Product type not found');
        }
        return data;
    }
    async getByStyle(style) {
        const data = await this.prisma.product.findMany({
            where: { dressStyle: { name: style } },
            include: {
                category: true,
                orderItems: true,
                dressStyle: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            }
        });
        if (!data) {
            throw new Error('Product type not found');
        }
        return data;
    }
    async getByStyleId(styleId) {
        const data = await this.prisma.product.findMany({
            where: { styleId },
            include: {
                dressStyle: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            }
        });
        if (!data) {
            throw new Error('Product type not found');
        }
        return data;
    }
    async getByType(type) {
        const data = await this.prisma.product.findMany({
            where: { type },
            include: {
                category: true
            }
        });
        if (!data) {
            throw new Error('Product type not found');
        }
        return data;
    }
    async getByGender(gender) {
        const data = await this.prisma.product.findMany({
            where: { gender },
            include: {
                category: true
            }
        });
        if (!data) {
            throw new Error('Product type not found');
        }
        return data;
    }
    async getSimilar(id) {
        const product = await this.getById(id);
        const data = await this.prisma.product.findMany({
            where: {
                AND: [{ categoryId: product.categoryId }, { id: { not: id } }]
            },
            take: 4,
            include: {
                category: true,
                productColors: { include: { color: true } },
                productSizes: { include: { size: true } }
            },
            orderBy: { createdAt: 'desc' }
        });
        return data;
    }
    async create(dto, categoryId) {
        const colorConnect = dto.colors?.map((color) => ({
            color: { connect: { id: color.id } }
        })) || [];
        const sizeConnect = dto.sizes?.map((size) => ({
            size: { connect: { id: size.id } }
        })) || [];
        return this.prisma.product.create({
            data: {
                name: dto.name,
                price: dto.price,
                brand: dto.brand,
                gender: dto.gender,
                images: dto.images,
                description: dto.description,
                productColors: { create: colorConnect },
                productSizes: { create: sizeConnect },
                categoryId,
                styleId: dto.styleId
            }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        const colorConnect = dto.colors?.map((color) => ({
            color: { connect: { id: color.id } }
        })) || [];
        const sizeConnect = dto.sizes?.map((size) => ({
            size: { connect: { id: size.id } }
        })) || [];
        return this.prisma.product.update({
            where: { id },
            data: {
                ...dto,
                productColors: { deleteMany: {}, create: colorConnect },
                productSizes: { deleteMany: {}, create: sizeConnect }
            }
        });
    }
    async delete(id) {
        await this.getById(id);
        await this.prisma.product.delete({ where: { id } });
        return { message: 'Success' };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pagination_service_1.PaginationService])
], ProductService);
//# sourceMappingURL=product.service.js.map