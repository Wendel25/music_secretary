import { Injectable } from '@nestjs/common';
import { CreateEssayDto } from 'src/common/dtos/essays/create-essay.dto';

@Injectable()
export class EssaysService {
  create(createEssayDto: CreateEssayDto) {
    return 'This action adds a new essay';
  }

  findAll() {
    return `This action returns all essays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} essay`;
  }

  remove(id: number) {
    return `This action removes a #${id} essay`;
  }
}
