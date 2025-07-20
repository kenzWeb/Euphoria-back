import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'
import { AppModule } from '../src/app.module'

const cookieParser = require('cookie-parser')

const server = express()

async function createNestApp() {
	const app = await NestFactory.create(AppModule, new ExpressAdapter(server))

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
	return app
}

createNestApp()

export default server
