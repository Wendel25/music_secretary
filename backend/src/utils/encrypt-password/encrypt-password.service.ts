import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class EncryptPasswordService {
    async cripto(password: string): Promise<string> {
        const saltRounds = 10;

        try {
            return await bcrypt.hash(password, saltRounds);
        } catch (err) {
            throw new BadRequestException('Error while encrypting password');
        }
    }
}
