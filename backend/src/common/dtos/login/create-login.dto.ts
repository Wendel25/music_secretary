import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDTO { 
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the email', example: 'luccawendel25@gmail.com' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the password', example: 'Has12634@ft' })
    password: string;
}