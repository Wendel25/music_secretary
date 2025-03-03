import { Injectable } from '@nestjs/common';

@Injectable()
export class DasboardService {
  findAll() {
    return `This action returns all dasboard`;
  }
}
