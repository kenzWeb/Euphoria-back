import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from '../src/app.module'

let app: any

async function bootstrap() {
	if (!app) {
		app = await NestFactory.create(AppModule)

		app.use(cookieParser())
		app.enableCors({
			origin: [
				process.env.CLIENT_URL,
				'https://euphoriak.vercel.app',
				'http://localhost:3000',
				'https://localhost:3000'
			],
			credentials: true,
			exposedHeaders: 'set-cookie'
		})

		await app.init()
	}
	return app
}

export default async (req: any, res: any) => {
	const server = await bootstrap()
	return server.getHttpAdapter().getInstance()(req, res)
}
