"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DressStyleModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const dress_style_controller_1 = require("./dress-style.controller");
const dress_style_service_1 = require("./dress-style.service");
let DressStyleModule = class DressStyleModule {
};
exports.DressStyleModule = DressStyleModule;
exports.DressStyleModule = DressStyleModule = __decorate([
    (0, common_1.Module)({
        controllers: [dress_style_controller_1.DressStyleController],
        providers: [dress_style_service_1.DressStyleService, prisma_service_1.PrismaService]
    })
], DressStyleModule);
//# sourceMappingURL=dress-style.module.js.map