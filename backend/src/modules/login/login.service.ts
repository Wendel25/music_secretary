import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from 'src/common/dtos/login/create-login.dto';

@Injectable()
export class LoginService {
  create(login: LoginDTO) {
    if (!login.email || !login.password) {
      throw new UnauthorizedException('Email not registered');
    }

    return 'This action adds a new login';
  }
}
