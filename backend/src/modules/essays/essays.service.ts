import { Injectable } from '@nestjs/common';
import { CreateEssayDto } from 'src/common/dtos/essays/create-essay.dto';
import { ListResponsivesService } from './utils/lists/lists.service';

@Injectable()
export class EssaysService {
  constructor(
    private listResponsivesService: ListResponsivesService
  ) { }

  async create(createEssayDto: CreateEssayDto) {
    return await 'This action adds a new essay';
  }

  async findAll() {
    return await `This action returns all essays`;
  }

  async responsiveEssays(id_city?: string) {
    return await this.listResponsivesService.listResponsives(id_city);
  }

  async presentMinistries(id_city?: string) {
    return await this.listResponsivesService.presentMinistries(id_city);
  }

  async remove(id: number) {
    return await `This action removes a #${id} essay`;
  }
}
