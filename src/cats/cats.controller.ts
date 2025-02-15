import { Controller, Delete, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Get, Post } from '@nestjs/common';

@Controller('api/cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getCats(): string[] {
    return this.catService.getCats();
  }

  @Post(':name')
  addCat(@Param('name') name: string) {
    this.catService.addCat(name);
    return name;
  }

  @Delete('pop')
  popCat(): string | null {
    return this.catService.popCat();
  }
}
