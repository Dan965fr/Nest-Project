import { Module, MiddlewareConsumer,NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { CommonModule } from './common/common.module';
import {JwtMiddleware} from './common/middleware/jwt-middleware'
import {DatabaseModule} from './db/db.module'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UsersModule, ShiftsModule, AssignmentsModule, CommonModule,DatabaseModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes('users','shifts','assignments'); 
  }
}
