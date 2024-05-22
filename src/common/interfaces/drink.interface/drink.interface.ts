import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'Drink interface' })
export abstract class Drink {
  @Field({ description: "Drink's name" })
  name: string;
}
