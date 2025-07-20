import { NestFactory } from '@nestjs/core'
import { AppModule } from '../src/app.module'

const cookieParser = require('cookie-parser')

let cachedApp: any = null

async function createApp() {
	if (cachedApp) {
		return cachedApp
	}

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
		exposedHeaders: 'set-cookie',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
	})

	await app.init()
	
	const expressInstance = app.getHttpAdapter().getInstance()
	cachedApp = expressInstance
	return expressInstance
}

export default async (req: any, res: any) => {
	try {
		const app = await createApp()
		return app(req, res)
	} catch (error) {
		console.error('Serverless function error:', error)
		if (!res.headersSent) {
			res.status(500).json({ 
				error: 'Internal Server Error', 
				message: error.message 
			})
		}
	}
}