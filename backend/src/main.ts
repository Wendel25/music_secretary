import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/music_secretary');

  app.enableCors({
    origin: ['http://localhost:5000'],
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Music Secretary')
    .setDescription(`This project was created with NEST version: <b>11.0.2</b>.`)
    .setVersion('1.0')
    // .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
