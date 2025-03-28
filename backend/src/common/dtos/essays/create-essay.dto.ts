import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEssayDto {
    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ description: 'Provide the date the essay was performed.' })
    date: Date;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Provide the city where the essay was performed.'})
    id_city: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Provide the conductor responsible for opening the essay' })
    first_regent: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'Provide the secondary regent, if any.' })
    second_regent: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'Please provide the total number of musicians' })
    instruments: string;
}
