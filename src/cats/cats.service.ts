import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cats.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async addCat(name: string): Promise<Cat> {
    const cat = new Cat(name);
    const createdCat = new this.catModel(cat);
    return await createdCat.save();
  }

  getCats(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
