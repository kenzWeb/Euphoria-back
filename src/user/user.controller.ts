import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from './decorators/user.decorators'
import { UserPasswordDto } from './dto/user.password.dto'
import { UserUpdateDto } from './dto/user.update.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Auth()
	@Get('profile')
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id)
	}

	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.userService.getById(id)
	}

	@Auth()
	@Patch('profile')
	async updateProfile(
		@CurrentUser('id') id: string,
		@Body() dto: UserUpdateDto
	) {
		return this.userService.updateProfile(id, dto)
	}

	@Auth()
	@Patch('profile/password')
	async updatePassword(
		@CurrentUser('id') id: string,
		@Body() dto: UserPasswordDto
	) {
		return this.userService.changePassword(id, dto)
	}

	@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') userId: string,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(userId, productId)
	}
}
