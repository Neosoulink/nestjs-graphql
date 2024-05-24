import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Coffee } from './coffee.entity';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';

@Entity()
@ObjectType({ implements: Drink, description: 'Coffee flavors model' })
export class Flavor implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique identifier' })
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
