import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common'

import { ApiKeyGuard } from '../guards/api-key.guard'

export function ApiKeyProtected() {
	return applyDecorators(
		SetMetadata(process.env.API_KEY_PROTECTED, true),
		UseGuards(ApiKeyGuard)
	)
}
