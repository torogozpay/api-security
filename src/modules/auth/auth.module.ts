import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthenticationService } from './services/authentication.service';

@Module({
  controllers: [AuthController],
  providers: [AuthenticationService],
})
export class AuthModule { }
