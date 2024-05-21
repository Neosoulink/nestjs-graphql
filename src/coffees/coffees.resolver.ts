import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { Coffee } from './entities/coffee.entity/coffee.entity';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffee], { name: 'coffees' })
  findAll() {
    return [];
  }

  @Query(() => Coffee, { name: 'coffee', nullable: true })
  findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return null;
  }
}
