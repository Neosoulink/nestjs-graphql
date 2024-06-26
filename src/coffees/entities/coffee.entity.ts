import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Drink } from '../../common/interfaces/drink.interface/drink.interface';
import { CoffeeType } from '../../common/enums/coffee-type.enum';
import { Flavor } from './flavor.entity';
import { loggerMiddleware } from 'src/common/middleware/logger.middleware';

@Entity()
@ObjectType({ description: 'Coffee model', implements: () => Drink })
export class Coffee implements Drink {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'A unique identifier' })
  id: number;

  @Field({ middleware: [loggerMiddleware] })
  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors?: Flavor[];

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  type?: CoffeeType;
}
