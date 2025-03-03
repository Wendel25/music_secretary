import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDTO } from 'src/common/dtos/login/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: LoginDTO) {
    return this.loginService.create(createLoginDto);
  }
}
