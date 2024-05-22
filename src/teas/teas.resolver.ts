import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';

import { Tea } from './entities/tea.entity';
import { CreateTeaInput } from './dto/create-tea.input';
import { TeasService } from './teas.service';
import { UpdateTeaInput } from './dto/update-tea.input';

@Resolver()
export class TeasResolver {
  constructor(private readonly _teasService: TeasService) {}

  @Query(() => [Tea], { name: 'teas' })
  async findAll() {
    return this._teasService.findAll();
  }

  @Query(() => Tea, { name: 'tea' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this._teasService.findOne(id);
  }

  @Mutation(() => Tea, { name: 'createTea' })
  async create(@Args('createTeaInput') createTeaInput: CreateTeaInput) {
    return this._teasService.create(createTeaInput);
  }

  @Mutation(() => Tea, { name: 'updateTea' })
  async update(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
    @Args('updateTeaInput') updateTeaInput: UpdateTeaInput,
  ) {
    return this._teasService.update(id, updateTeaInput);
  }

  @Mutation(() => Tea, { name: 'removeTea' })
  async remove(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this._teasService.remove(id);
  }
}
