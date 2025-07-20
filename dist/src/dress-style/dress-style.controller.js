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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DressStyleController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const dress_style_service_1 = require("./dress-style.service");
const dress_style_dto_1 = require("./dto/dress-style.dto");
let DressStyleController = class DressStyleController {
    constructor(dressStyleService) {
        this.dressStyleService = dressStyleService;
    }
    async getAll() {
        return this.dressStyleService.getAll();
    }
    async getById(id) {
        return this.dressStyleService.getById(id);
    }
    async create(dto) {
        return this.dressStyleService.create(dto);
    }
    async update(id, dto) {
        return this.dressStyleService.update(id, dto);
    }
    async delete(id) {
        return this.dressStyleService.delete(id);
    }
};
exports.DressStyleController = DressStyleController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DressStyleController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DressStyleController.prototype, "getById", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dress_style_dto_1.dressStyleDto]),
    __metadata("design:returntype", Promise)
], DressStyleController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dress_style_dto_1.dressStyleDto]),
    __metadata("design:returntype", Promise)
], DressStyleController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DressStyleController.prototype, "delete", null);
exports.DressStyleController = DressStyleController = __decorate([
    (0, common_1.Controller)('dressStyles'),
    __metadata("design:paramtypes", [dress_style_service_1.DressStyleService])
], DressStyleController);
//# sourceMappingURL=dress-style.controller.js.map