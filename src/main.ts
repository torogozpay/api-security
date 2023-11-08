import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import databaseMigrations from './db/migracion';

async function bootstrap() {
  const defaultVersion = '0';

  await databaseMigrations();

  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    defaultVersion,
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Gavilan')
    .setDescription('Gavilan API')
    .setVersion('development')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`v${defaultVersion}`, app, document);

  await app.listen(3030);
}
bootstrap();
