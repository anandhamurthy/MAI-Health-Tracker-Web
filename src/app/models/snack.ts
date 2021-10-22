import { Icon } from './icon';

export class Snack {
  foods: Icon[];
  drinks: Icon[];
  symptoms: Icon[];

  health: number;

  constructor(foods: Icon[], drinks: Icon[], symptoms: Icon[], health: number) {
    this.foods = foods;
    this.drinks = drinks;
    this.symptoms = symptoms;
    this.health = health;
  }
}
