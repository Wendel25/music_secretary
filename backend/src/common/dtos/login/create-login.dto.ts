import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDTO { 
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the email' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the password' })
    password: string;
}