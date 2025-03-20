import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicianAndOrganistsService } from './musician-and-organists.service';
import { CreateMusicianAndOrganistDto } from 'src/common/dtos/musician-and-organists/create-musician-and-organist.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

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
  async findAll() {
    return await this.musicianAndOrganistsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    return await this.musicianAndOrganistsService.findOne(+id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.musicianAndOrganistsService.remove(+id);
  }
}
