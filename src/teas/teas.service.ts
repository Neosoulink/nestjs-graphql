import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tea } from './entities/tea.entity';
import { Repository } from 'typeorm';
import { UserInputError } from '@nestjs/apollo';
import { CreateTeaInput } from './dto/create-tea.input';
import { UpdateTeaInput } from './dto/update-tea.input';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(Tea) private readonly _teaRepository: Repository<Tea>,
  ) {}

  async findAll() {
    return await this._teaRepository.find();
  }

  async findOne(id: number) {
    const tea = await this._teaRepository.findOne({ where: { id } });

    if (!tea) throw new UserInputError(`Tea #${id} not found`);

    return tea;
  }

  async create(createTeaInput: CreateTeaInput) {
    const tea = this._teaRepository.create(createTeaInput);

    return this._teaRepository.save(tea);
  }

  async update(id: number, updateTeaInput: UpdateTeaInput) {
    const tea = await this._teaRepository.preload({
      id,
      ...updateTeaInput,
    });

    if (!tea) throw new UserInputError(`Tea #${id} not found`);

    return this._teaRepository.save(tea);
  }

  async remove(id: number) {
    const tea = await this.findOne(id);

    return this._teaRepository.remove(tea);
  }
}
