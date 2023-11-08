import { Injectable } from '@nestjs/common';
// import { FirebaseApp } from 'src/config/firebase.app';
@Injectable()
export class AuthenticationService {
  constructor() { }

  async login(email: string, password: string): Promise<string | null> {
    // return this.auth.login(email, password);
    return null;
  }
}

export default AuthenticationService;
