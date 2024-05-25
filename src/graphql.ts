
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CoffeeType {
    ARABICA = "ARABICA",
    ROBUSTA = "ROBUSTA"
}

export class CreateCoffeeInput {
    name: string;
    brand: string;
    flavors: string[];
}

export class UpdateCoffeeInput {
    name?: Nullable<string>;
    brand?: Nullable<string>;
    flavors?: Nullable<string[]>;
}

export interface Drink {
    name: string;
}

export class Tea implements Drink {
    name: string;
    createdAt?: Nullable<Date>;
}

export class Coffee implements Drink {
    id: number;
    name: string;
    brand: string;
    flavors: string[];
    type?: Nullable<CoffeeType>;
    createdAt?: Nullable<Date>;
}

export abstract class IQuery {
    coffees: Coffee[];
    coffee?: Coffee;
    drinks: DrinksResult[];
}

export abstract class IMutation {
    createCoffee?: Coffee;
    updateCoffee?: Coffee;
    removeCoffee?: Coffee;
}

export abstract class ISubscription {
    coffeeAdded: Coffee;
}

export type DrinksResult = Coffee | Tea;
type Nullable<T> = T | null;
