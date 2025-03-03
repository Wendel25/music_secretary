import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/entities/user/user.entity';

@Injectable()
export class UpdateUserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    public async update(id: string, updateUserDto: UserEntity): Promise<UpdateResult> {
        return await this.userRepository.update(id, updateUserDto);
    }
}
