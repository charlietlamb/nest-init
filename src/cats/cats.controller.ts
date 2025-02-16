import { Controller, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Get, Post } from '@nestjs/common';
import { Cat } from './cats.schema';

@Controller('api/cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  async getCats(): Promise<Cat[]> {
    return await this.catService.getCats();
  }

  @Post(':name')
  async addCat(@Param('name') name: string) {
    await this.catService.addCat(name);
    return name;
  }
}
