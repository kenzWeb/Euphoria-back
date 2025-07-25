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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorators_1 = require("../user/decorators/user.decorators");
const order_dto_1 = require("./dto/order.dto");
const payment_status_dto_1 = require("./dto/payment-status.dto");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async checkout(dto, userId) {
        return this.orderService.createPayment(dto, userId);
    }
    async updateOrederStatus(dto) {
        return this.orderService.updateStatus(dto);
    }
    async getMyOrders(userId) {
        return this.orderService.getMyOrders(userId);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('create'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorators_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.OrderDto, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "checkout", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('status'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_status_dto_1.PaymentStatusDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrederStatus", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('my-orders'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, user_decorators_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getMyOrders", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map