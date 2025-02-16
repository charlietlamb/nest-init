import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  constructor(name: string) {
    this.name = name;
  }
  @Prop()
  name: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
