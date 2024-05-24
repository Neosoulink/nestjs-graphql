import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import DataLoader from 'dataloader';

import { Flavor } from 'src/coffees/entities/flavor.entity';
import { Coffee } from 'src/coffees/entities/coffee.entity';

@Injectable()
export class CoffeesByFlavorLoader extends DataLoader<number, Coffee[]> {
  constructor(
    @InjectRepository(Flavor)
    private readonly _flavorRepository: Repository<Flavor>,
  ) {
    super((keys) => this.batchLoadFn(keys));
  }

  private async batchLoadFn(flavorIds: readonly number[]): Promise<Coffee[][]> {
    const coffeesWithFlavors = await this._flavorRepository.find({
      select: ['id'],
      relations: {
        coffees: true,
      },
      where: {
        id: In(flavorIds),
      },
    });

    return coffeesWithFlavors.map((flavor) => flavor.coffees);
  }
}
