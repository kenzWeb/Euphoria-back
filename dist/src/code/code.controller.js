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
exports.CodeController = void 0;
const common_1 = require("@nestjs/common");
const api_key_protected_decorator_1 = require("../auth/decorators/api-key-protected.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const code_service_1 = require("./code.service");
const code_dto_1 = require("./dto/code.dto");
let CodeController = class CodeController {
    constructor(codeService) {
        this.codeService = codeService;
    }
    async getAllCodes() {
        return this.codeService.getAllCodes();
    }
    async getByCode(code) {
        return this.codeService.getCode(code);
    }
    async createCode(dto) {
        if (!dto) {
            throw new common_1.BadRequestException('Code and value are required');
        }
        return this.codeService.createCode(dto);
    }
};
exports.CodeController = CodeController;
__decorate([
    (0, api_key_protected_decorator_1.ApiKeyProtected)(),
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "getAllCodes", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-code/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "getByCode", null);
__decorate([
    (0, api_key_protected_decorator_1.ApiKeyProtected)(),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [code_dto_1.CodeDto]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "createCode", null);
exports.CodeController = CodeController = __decorate([
    (0, common_1.Controller)('codes'),
    __metadata("design:paramtypes", [code_service_1.CodeService])
], CodeController);
//# sourceMappingURL=code.controller.js.map