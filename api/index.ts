import { NestFactory } from '@nestjs/core'
import { AppModule } from '../src/app.module'

const cookieParser = require('cookie-parser')

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
	try {
		const nestApp = await bootstrap()
		const httpAdapter = nestApp.getHttpAdapter()
		const instance = httpAdapter.getInstance()

		return instance(req, res)
	} catch (error) {
		console.error('Error in serverless function:', error)
		if (!res.headersSent) {
			res
				.status(500)
				.json({ error: 'Internal Server Error', details: error.message })
		}
	}
}
