"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyProtected = ApiKeyProtected;
const common_1 = require("@nestjs/common");
const api_key_guard_1 = require("../guards/api-key.guard");
function ApiKeyProtected() {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(process.env.API_KEY_PROTECTED, true), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard));
}
//# sourceMappingURL=api-key-protected.decorator.js.map