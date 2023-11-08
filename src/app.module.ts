import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';
import { FirebasePreAuthMiddelware } from './config/firebase.auth.md';
// import { FirebaseModule } from './config/firebase.module';
import { FirebaseApp } from './config/firebase.app';

@Module({
  imports: [AuthModule, UsersModule, WorkspacesModule],
  providers: [FirebaseApp],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirebasePreAuthMiddelware).forRoutes('*');
  }
}
