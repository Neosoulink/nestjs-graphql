import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { Coffee } from './entities/coffee.entity/coffee.entity';
import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';
import { CoffeesService } from './coffees.service';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Query(() => [Coffee], { name: 'coffees' })
  findAll() {
    return this.coffeeService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeeService.create(createCoffeeInput);
  }
}
