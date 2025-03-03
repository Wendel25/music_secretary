import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupAppConfig } from 'src/config/app/app.config';
import { setupSwagger } from 'src/config/swagger/swagger.config';
import { TimeoutInterceptor } from 'src/common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupAppConfig(app);
  setupSwagger(app);

  app.useGlobalInterceptors(new TimeoutInterceptor());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
