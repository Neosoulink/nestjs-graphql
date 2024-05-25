import { Query, Resolver } from '@nestjs/graphql';

import { DrinksResultUnion } from '../common/unions/drinks-results.union';

import { DrinksService } from './drinks.service';

@Resolver('DrinksResult')
export class DrinksResolver {
  constructor(private readonly _drinksService: DrinksService) {}

  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    return this._drinksService.findAll();
  }
}
