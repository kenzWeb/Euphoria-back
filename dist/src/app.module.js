"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const arrival_module_1 = require("./arrival/arrival.module");
const auth_module_1 = require("./auth/auth.module");
const category_module_1 = require("./category/category.module");
const code_module_1 = require("./code/code.module");
const color_module_1 = require("./color/color.module");
const dress_style_module_1 = require("./dress-style/dress-style.module");
const file_module_1 = require("./file/file.module");
const order_module_1 = require("./order/order.module");
const pagination_module_1 = require("./pagination/pagination.module");
const product_module_1 = require("./product/product.module");
const shipping_address_module_1 = require("./shipping-address/shipping-address.module");
const size_module_1 = require("./size/size.module");
const user_module_1 = require("./user/user.module");
const zone_module_1 = require("./zone/zone.module");
const billing_module_1 = require("./billing/billing.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            color_module_1.ColorModule,
            category_module_1.CategoryModule,
            order_module_1.OrderModule,
            product_module_1.ProductModule,
            size_module_1.SizeModule,
            dress_style_module_1.DressStyleModule,
            shipping_address_module_1.ShippingAddressModule,
            arrival_module_1.ArrivalModule,
            zone_module_1.ZoneModule,
            file_module_1.FileModule,
            pagination_module_1.PaginationModule,
            code_module_1.CodeModule,
            billing_module_1.BillingModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map