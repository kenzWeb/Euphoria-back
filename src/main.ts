import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const cookieParser = require('cookie-parser')

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.use(cookieParser())
	app.enableCors({
		origin: [process.env.CLIENT_URL],
		credentials: true,
		exposedHeaders: 'set-cookie',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'Authorization'
		]
	})

	await app.listen(5001)
}
bootstrap()
