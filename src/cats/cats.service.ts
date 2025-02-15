import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: string[] = [];

  addCat(cat: string): void {
    this.cats.push(cat);
  }

  popCat(): string | null {
    if (this.cats.length === 0) {
      return null;
    }
    const firstCat = this.cats[0];
    this.cats = this.cats.slice(1);
    return firstCat;
  }

  getCats(): string[] {
    return this.cats;
  }
}
