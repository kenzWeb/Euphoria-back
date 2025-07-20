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
exports.ProductDto = exports.SizeDto = exports.ColorDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class ColorDto {
}
exports.ColorDto = ColorDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ColorDto.prototype, "id", void 0);
class SizeDto {
}
exports.SizeDto = SizeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SizeDto.prototype, "id", void 0);
class ProductDto {
}
exports.ProductDto = ProductDto;
__decorate([
    (0, class_validator_1.IsString)({
        message: 'name should be string'
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'brand should be string'
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'description should be string'
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, {
        message: 'should be number'
    }),
    __metadata("design:type", Number)
], ProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'gender should be string'
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'styleId should be string'
    }),
    __metadata("design:type", String)
], ProductDto.prototype, "styleId", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'colors should be array of objects'
    }),
    __metadata("design:type", Array)
], ProductDto.prototype, "colors", void 0);
__decorate([
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Должна быть хотя бы одна картинка' }),
    (0, class_validator_1.IsNotEmpty)({
        each: true,
        message: 'Путь к картинке не может быть пустым'
    }),
    __metadata("design:type", Array)
], ProductDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'sizes should be array of strings'
    }),
    __metadata("design:type", Array)
], ProductDto.prototype, "sizes", void 0);
//# sourceMappingURL=product.dto.js.map