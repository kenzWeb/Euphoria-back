import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import * as cookieParser from 'cookie-parser'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

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

	await app.listen(process.env.PORT || 5001)
}
bootstrap()
