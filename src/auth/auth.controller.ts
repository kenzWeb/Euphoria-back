/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Req,
	Res,
	UnauthorizedException,
	UseGuards,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@ApiOperation({ summary: 'Login user' })
	@ApiResponse({ status: 200, description: 'User logged in successfully' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiBody({ type: AuthDto })
	@Post('login')
	async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
		const { refreshToken, ...response } = await this.authService.login(dto)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@ApiOperation({ summary: 'Register user' })
	@ApiResponse({ status: 200, description: 'User registered successfully' })
	@ApiResponse({ status: 401, description: 'Unauthorized' })
	@ApiBody({ type: AuthDto })
	@Post('register')
	async register(
		@Body() dto: AuthDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.register(dto)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login/access-token')
	async getNewTokens(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		const refreshTokenFromCookies =
			req.cookies[this.authService.REFRESH_TOKEN_NAME]

		if (!refreshTokenFromCookies) {
			this.authService.removeRefreshTokenFromResponse(res)
			throw new UnauthorizedException('Refresh токен не прошел')
		}

		const { refreshToken, ...response } = await this.authService.getNewTokens(
			refreshTokenFromCookies
		)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@HttpCode(200)
	@ApiOperation({ summary: 'Logout user' })
	@ApiResponse({ status: 200, description: 'User logged out successfully' })
	@Post('logout')
	async logout(@Res({ passthrough: true }) res: Response) {
		this.authService.removeRefreshTokenFromResponse(res)
		return true
	}

	@Get('google')
	@UseGuards(AuthGuard('google'))
	@ApiOperation({ summary: 'Google OAuth login' })
	async googleAuth(@Req() _req) {}

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	@ApiOperation({ summary: 'Google OAuth callback' })
	async googleAuthCallback(
		@Req() req,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } =
			await this.authService.validateOAuthLogin(req)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${process.env['CLIENT_URL']}?accessToken=${response.accessToken}`
		)
	}

	@Get('yandex')
	@UseGuards(AuthGuard('yandex'))
	async yandexAuth(@Req() req) {}

	@Get('yandex/callback')
	@UseGuards(AuthGuard('yandex'))
	async yandexAuthCallback(
		@Req() req,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } =
			await this.authService.validateOAuthLogin(req)

		this.authService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(
			`${process.env['CLIENT_URL']}?accessToken=${response.accessToken}`
		)
	}

	@HttpCode(200)
	@Get('check')
	async checkAuth(@Req() req: Request, @Res() res: Response) {
		const refreshTokenFromCookies =
			req.cookies[this.authService.REFRESH_TOKEN_NAME]
		if (!refreshTokenFromCookies) {
			return res.json({ authenticated: false })
		}

		try {
			await this.authService.getNewTokens(refreshTokenFromCookies)
			return res.json({ authenticated: true })
		} catch (e) {
			return res.json({ authenticated: false })
		}
	}
}
