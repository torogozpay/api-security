import { Module } from '@nestjs/common';
import { FirebaseApp } from './firebase.app';

@Module({
  providers: [FirebaseApp],
})
export class FirebaseModule { }
