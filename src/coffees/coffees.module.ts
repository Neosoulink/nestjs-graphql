import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeeFlavorsResolver } from './coffee-flavors.resolver';
import { FlavorCoffeesResolver } from './flavor-coffees.resolver';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee/flavors-by-coffee.loader';
import { CoffeesByFlavorLoader } from './data-loader/coffees-by-flavor/coffees-by-flavor.loader';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor]), PubSubModule],
  providers: [
    CoffeesService,
    CoffeesResolver,
    CoffeeFlavorsResolver,
    FlavorCoffeesResolver,
    FlavorsByCoffeeLoader,
    CoffeesByFlavorLoader,
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
