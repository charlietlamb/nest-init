import { Controller, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Get, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from 'src/schema/cats.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  async getCats(): Promise<Cat[]> {
    return await this.catService.getCats();
  }

  @Post()
  async addCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return await this.catService.addCat(createCatDto);
  }
}
