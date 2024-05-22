import { Injectable } from '@nestjs/common';

import { CoffeesService } from 'src/coffees/coffees.service';
import { TeasService } from 'src/teas/teas.service';

@Injectable()
export class DrinksService {
  constructor(
    private readonly _coffeesService: CoffeesService,
    private readonly _teaService: TeasService,
  ) {}

  async findAll() {
    return [
      ...(await this._coffeesService.findAll()),
      ...(await this._teaService.findAll()),
    ];
  }
}
