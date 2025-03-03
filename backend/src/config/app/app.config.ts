import { INestApplication, ValidationPipe } from '@nestjs/common';

export function setupAppConfig(app: INestApplication) {
    app.setGlobalPrefix('api/');

    app.enableCors({
        origin: ['http://localhost:3000'],
        methods: 'GET,PUT,POST,DELETE',
        credentials: true,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        })
    );
}