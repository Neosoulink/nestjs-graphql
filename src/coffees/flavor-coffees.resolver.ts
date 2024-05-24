import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesByFlavorLoader } from './data-loader/coffees-by-flavor/coffees-by-flavor.loader';

@Resolver(() => Flavor)
export class FlavorCoffeesResolver {
  constructor(private readonly coffeesByFlavorLoader: CoffeesByFlavorLoader) {}

  @ResolveField('coffees', () => [Coffee])
  async getCoffee(@Parent() flavor: Flavor) {
    return this.coffeesByFlavorLoader.load(flavor.id);
  }
}
