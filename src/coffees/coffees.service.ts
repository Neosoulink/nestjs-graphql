import { Injectable } from '@nestjs/common';
import { UserInputError } from '@nestjs/apollo';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateCoffeeInput } from './dto/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return this.coffeesRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeesRepository.findOne({ where: { id } });

    if (!coffee) throw new UserInputError(`Coffee #${id} not found`);

    return coffee;
  }

  async create(createCoffeeInput: CreateCoffeeInput) {
    const coffee = this.coffeesRepository.create(createCoffeeInput);

    return this.coffeesRepository.save(coffee);
  }

  async update(id: number, updateCoffeeInput: UpdateCoffeeInput) {
    const coffee = await this.coffeesRepository.preload({
      id,
      ...updateCoffeeInput,
    });
    if (!coffee) throw new UserInputError(`Coffee #${id} does not exist`);

    return this.coffeesRepository.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.coffeesRepository.remove(coffee);
  }
}
