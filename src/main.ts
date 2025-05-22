import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cappy API')
    .setDescription('Cappy API description')
    .setVersion('1.0')
    .addTag('test-tag')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
