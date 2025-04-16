import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID, } from 'class-validator';

export class CreateMinistryDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the user name' })
    name: string;

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
    @ApiProperty({ description: 'inform the user ministry' })
    id_ministry: string;
}
