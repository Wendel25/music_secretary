import { INestApplication, ValidationPipe } from '@nestjs/common';

export function setupAppConfig(app: INestApplication) {
    app.setGlobalPrefix('api/');

    app.enableCors({
        origin: ['http://localhost:3000', 'https://localhost:3000', 'https://192.168.100.127:3000', 'http://192.168.100.127:3000'],
        methods: 'GET,PATCH,POST,DELETE',
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