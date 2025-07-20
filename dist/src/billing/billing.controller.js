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
exports.BillingController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorators_1 = require("../user/decorators/user.decorators");
const billing_service_1 = require("./billing.service");
const billing_dto_1 = require("./dto/billing.dto");
let BillingController = class BillingController {
    constructor(billingService) {
        this.billingService = billingService;
    }
    async checkBilling(dto, userId, isSave) {
        const shouldSave = isSave === 'true' || isSave === 'True';
        return await this.billingService.checkBilling(dto, shouldSave, userId);
    }
};
exports.BillingController = BillingController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)('check'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorators_1.CurrentUser)('id')),
    __param(2, (0, common_1.Query)('isSave')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [billing_dto_1.BillingDto, String, String]),
    __metadata("design:returntype", Promise)
], BillingController.prototype, "checkBilling", null);
exports.BillingController = BillingController = __decorate([
    (0, common_1.Controller)('billing'),
    __metadata("design:paramtypes", [billing_service_1.BillingService])
], BillingController);
//# sourceMappingURL=billing.controller.js.map