"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtauthGuards = void 0;
const passport_1 = require("@nestjs/passport");
class JwtauthGuards extends (0, passport_1.AuthGuard)('jwt') {
}
exports.JwtauthGuards = JwtauthGuards;
//# sourceMappingURL=jwt-auth.guard.js.map