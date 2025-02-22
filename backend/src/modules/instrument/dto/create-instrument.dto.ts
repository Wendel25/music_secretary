import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInstrumentDTO { 
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Instrument category id',
    })
    id_category: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Enter the name of the instrument',
    })
    value: string;
}
