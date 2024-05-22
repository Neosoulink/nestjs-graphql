import { InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

import { Drink } from '../../common/interfaces/drink.interface/drink.interface';

@InputType({ description: 'Tea edition input' })
export class CreateTeaInput implements Drink {
  @MinLength(3)
  name: string;
}
