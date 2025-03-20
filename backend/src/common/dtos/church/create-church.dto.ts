import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateChurchDto { 
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Enter the name of the church',
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Enter the location and status',
    })
    id_city: string;
}
