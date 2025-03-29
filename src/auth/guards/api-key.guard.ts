import {
	CanActivate,
	ExecutionContext,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Observable } from 'rxjs'

@Injectable()
export class ApiKeyGuard implements CanActivate {
	private readonly API_KEY: string

	constructor(private configService: ConfigService) {
		this.API_KEY = this.configService.get('API_KEY')
	}

	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()
		const apiKey = request.headers['x-api-key']

		if (!apiKey || apiKey !== this.API_KEY) {
			throw new NotFoundException('Cannot POST /codes')
		}

		return true
	}
}
