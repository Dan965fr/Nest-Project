
import { NestFactory } from '@nestjs/core';
// import { Module } from '@nestjs/common';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { initModels } from './models';
import { DbService } from './db/db.service';



// @Module({
//   imports: [AuthModule, UsersModule],
// })


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);


  const dbService = app.get(DbService);
  initModels(dbService.getSequelize()); // יוצר קשרים
  await dbService.syncDatabase();
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
