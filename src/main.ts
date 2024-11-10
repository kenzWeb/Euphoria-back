import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const logger = new Logger('Bootstrap')

	app.use(cookieParser())
	app.enableCors({
		origin: [process.env.CLIENT_URL],
		credentials: true,
		exposedHeaders: ['set-cookie']
	})

	const config = new DocumentBuilder()
		.setTitle('Euphoria API')
		.setDescription('The Euphoria API description')
		.setVersion('0.0.1')
		.addTag('Euphoria')
		.build()

	const document = SwaggerModule.createDocument(app, config)


	SwaggerModule.setup('api', app, document)

	logger.log('Swagger setup completed')

	await app.listen(3000, () => {
		logger.log('Application started on port 3000')
	})
}

bootstrap()
