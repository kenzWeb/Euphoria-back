"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const app_root_path_1 = require("app-root-path");
const file_controller_1 = require("./file.controller");
const file_service_1 = require("./file.service");
let FileModule = class FileModule {
};
exports.FileModule = FileModule;
exports.FileModule = FileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: `${app_root_path_1.path}/uploads`,
                serveRoot: '/uploads'
            })
        ],
        controllers: [file_controller_1.FileController],
        providers: [file_service_1.FileService]
    })
], FileModule);
//# sourceMappingURL=file.module.js.map