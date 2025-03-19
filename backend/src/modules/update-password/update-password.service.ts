import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user/user.entity';
import { UpdateUpdatePasswordDto } from './dto/update-update-password.dto';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EncryptPasswordService } from 'src/utils/encrypt-password/encrypt-password.service';

@Injectable()
export class UpdatePasswordService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly encryptPasswordService: EncryptPasswordService,
  ) { }

  public async update(email: string, dto: UpdateUpdatePasswordDto): Promise<{ message: string }> {
    const user = await this.GetUserByEmail(email);
    const newPassword = await this.encryptPasswordService.cripto(dto.password);

    try {
      user.password_hash = newPassword;
      user.password_changed_at = new Date();

      await this.userRepository.save(user);

      return { message: 'Password updated successfully' };
    } catch (error) {
      throw new BadRequestException('Error while updating password');
    }
  }

  private async GetUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
