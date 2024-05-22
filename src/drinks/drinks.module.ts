import { Module } from '@nestjs/common';

import { TeasModule } from 'src/teas/teas.module';
import { CoffeesModule } from 'src/coffees/coffees.module';

import { DrinksService } from './drinks.service';
import { DrinksResolver } from './drinks.resolver';

@Module({
  imports: [TeasModule, CoffeesModule],
  providers: [DrinksService, DrinksResolver],
})
export class DrinksModule {}
