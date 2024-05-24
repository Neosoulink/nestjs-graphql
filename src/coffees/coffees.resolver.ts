import {
  Args,
  ID,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

// In case of schema first approach, get the Coffee, Flavors & Drink types from `graphql.ts`
// import * as GraphQLType from '../graphql';

import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class CoffeesResolver {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly pubSub: PubSub,
  ) {}

  @Query(() => [Coffee], { name: 'coffees' })
  findAll() {
    return this.coffeesService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeesService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeesService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'updateCoffee' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return this.coffeesService.update(id, updateCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'removeCoffee' })
  async remove(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffeesService.remove(id);
  }

  @Subscription(() => Coffee)
  coffeeAdded() {
    return this.pubSub.asyncIterator('coffeeAdded');
  }
}
