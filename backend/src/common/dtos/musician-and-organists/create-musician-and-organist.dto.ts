import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class CreateMusicianAndOrganistDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'inform the user name' })
    name: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'inform the user phone' })
    phone?: string;

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
    id_instrument: string;

    @IsString()
    @IsOptional()
    @IsUUID()
    @ApiProperty({ description: 'inform the id for status' })
    id_status: string;
}
