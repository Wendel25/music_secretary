import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsUUID } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the user name' })
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ description: 'inform the user email' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the user phone' })
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({ description: 'inform the id for church' })
    id_church: string;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({ description: 'inform the id for ministry' })
    id_ministry: string;
}
