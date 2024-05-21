import { Injectable } from '@nestjs/common';
import { UserInputError } from '@nestjs/apollo';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCoffeeInput } from './dto/create-coffee.input/create-coffee.input';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });

    if (!coffee) throw new UserInputError(`Coffee #${id} not found`);

    return coffee;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    const coffee = this.coffeeRepository.create(createCoffeeInput);

    return this.coffeeRepository.save(coffee);
  }
}
