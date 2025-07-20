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
exports.ShippingAddressController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorators_1 = require("../user/decorators/user.decorators");
const shipping_address_dto_1 = require("./dto/shipping-address.dto");
const shipping_address_service_1 = require("./shipping-address.service");
let ShippingAddressController = class ShippingAddressController {
    constructor(shippingAddressService) {
        this.shippingAddressService = shippingAddressService;
    }
    async getShippingAddresses(userId) {
        return this.shippingAddressService.getByUserId(userId);
    }
    async addShippingAddress(userId, dto) {
        return this.shippingAddressService.addAddress(userId, dto);
    }
    async deleteShippingAddress(userId, addressId) {
        return this.shippingAddressService.deleteAddress(userId, addressId);
    }
};
exports.ShippingAddressController = ShippingAddressController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)(),
    __param(0, (0, user_decorators_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShippingAddressController.prototype, "getShippingAddresses", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(),
    __param(0, (0, user_decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, shipping_address_dto_1.ShippingAddressDto]),
    __metadata("design:returntype", Promise)
], ShippingAddressController.prototype, "addShippingAddress", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(),
    __param(0, (0, user_decorators_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ShippingAddressController.prototype, "deleteShippingAddress", null);
exports.ShippingAddressController = ShippingAddressController = __decorate([
    (0, common_1.Controller)('shipping-addresses'),
    __metadata("design:paramtypes", [shipping_address_service_1.ShippingAddressService])
], ShippingAddressController);
//# sourceMappingURL=shipping-address.controller.js.map