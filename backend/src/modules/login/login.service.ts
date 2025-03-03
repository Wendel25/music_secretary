import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO } from 'src/common/dtos/login/create-login.dto';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { ValidationAccessService } from 'src/modules/login/utils/validation-access/validation-access.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,

    private readonly validationAccess: ValidationAccessService
  ) { }

  async create(login: LoginDTO) {
    if (!login.email || !login.password) {
      throw new UnauthorizedException('Email not registered');
    }

    const user = await this.usersRepository.findOne({
      where: { email: login.email }
    });

    if (!user) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    return await this.validationAccess.validationAccessUser(login.password, user);
  }
}
