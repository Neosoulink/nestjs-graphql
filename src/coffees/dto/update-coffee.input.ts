import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCoffeeInput } from './create-coffee.input';

// Should extends the `GraphQLType#UpdateCoffeeInput` in case of schema-first approach
@InputType()
export class UpdateCoffeeInput extends PartialType(CreateCoffeeInput) {}
