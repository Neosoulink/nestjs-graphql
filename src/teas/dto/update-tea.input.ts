import { InputType, PartialType } from '@nestjs/graphql';

import { CreateTeaInput } from './create-tea.input';

@InputType({ description: 'Tea edition input' })
export class UpdateTeaInput extends PartialType(CreateTeaInput) {}
