import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { MusicianAndOrganistsService } from './musician-and-organists.service';
import { CreateMusicianAndOrganistDto } from 'src/common/dtos/musician-and-organists/create-musician-and-organist.dto';

@Controller('musician-and-organists')
@ApiTags('Musician and Rrganists')
export class MusicianAndOrganistsController {
  constructor(private readonly musicianAndOrganistsService: MusicianAndOrganistsService) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() data: CreateMusicianAndOrganistDto) {
    return await this.musicianAndOrganistsService.create(data);
  }

  @Get()
  @ApiBearerAuth()
  @ApiQuery({ name: 'id_city', required: false })
  async findAll(@Query('id_city') id_city?: string) {
    return await this.musicianAndOrganistsService.findAll(id_city);
  }

  @Get('musician')
  @ApiBearerAuth()
  @ApiQuery({ name: 'id_city', required: false })
  async findAllMusician(@Query('id_city') id_city?: string) {
    return await this.musicianAndOrganistsService.findAllMusician(id_city);
  }

  @Get('organists')
  @ApiBearerAuth()
  @ApiQuery({ name: 'id_city', required: false })
  async findAllOrganists(@Query('id_city') id_city?: string) {
    return await this.musicianAndOrganistsService.findAllOrganists(id_city);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.musicianAndOrganistsService.remove(+id);
  }
}
