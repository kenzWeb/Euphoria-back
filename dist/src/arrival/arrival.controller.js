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
exports.ArrivalController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const arrival_service_1 = require("./arrival.service");
const arrival_dto_1 = require("./dto/arrival.dto");
let ArrivalController = class ArrivalController {
    constructor(arrivalService) {
        this.arrivalService = arrivalService;
    }
    create(createArrivalDto) {
        return this.arrivalService.create(createArrivalDto);
    }
    findAll() {
        return this.arrivalService.getAll();
    }
    findOne(id) {
        return this.arrivalService.getById(id);
    }
    update(id, updateArrivalDto) {
        return this.arrivalService.update(id, updateArrivalDto);
    }
    remove(id) {
        return this.arrivalService.remove(id);
    }
};
exports.ArrivalController = ArrivalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [arrival_dto_1.ArrivalDto]),
    __metadata("design:returntype", void 0)
], ArrivalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArrivalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArrivalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, arrival_dto_1.ArrivalDto]),
    __metadata("design:returntype", void 0)
], ArrivalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArrivalController.prototype, "remove", null);
exports.ArrivalController = ArrivalController = __decorate([
    (0, common_1.Controller)('arrivals'),
    __metadata("design:paramtypes", [arrival_service_1.ArrivalService])
], ArrivalController);
//# sourceMappingURL=arrival.controller.js.map