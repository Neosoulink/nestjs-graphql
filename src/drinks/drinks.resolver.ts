import { Query, Resolver } from '@nestjs/graphql';

import { Drink } from '../common/interfaces/drink.interface/drink.interface';

import { DrinksService } from './drinks.service';

@Resolver()
export class DrinksResolver {
  constructor(private readonly _drinksService: DrinksService) {}

  @Query(() => [Drink], { name: 'drinks' })
  async findAll(): Promise<Drink[]> {
    return this._drinksService.findAll();
  }
}
