import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsUUID, IsOptional } from 'class-validator';

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

    // @IsString()
    // @IsNotEmpty()
    // @IsStrongPassword({
    //     minLength: 8,
    //     minLowercase: 1,
    //     minUppercase: 1,
    //     minNumbers: 1,
    //     minSymbols: 1,
    // })
    // @ApiProperty({ description: 'inform the password for access' })
    // password: string;

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

    @IsString()
    @IsOptional()
    @IsUUID()
    @ApiProperty({ description: 'inform the id for instrument' })
    id_instrument?: string;

    @IsString()
    @IsOptional()
    @IsUUID()
    @ApiProperty({ description: 'inform the id for status' })
    id_status?: string;
}
