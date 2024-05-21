import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Coffee } from './entities/coffee.entity/coffee.entity';
import { CoffeesResolver } from './coffees.resolver';
import { CoffeesService } from './coffees.service';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
