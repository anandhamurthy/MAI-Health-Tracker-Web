import { Breakfast } from './breakfast';
import { Lunch } from './lunch';
import { Snack } from './snack';
import { Dinner } from './dinner';

export class Records {
  day: number;
  month: number;
  year: number;
  month_name: string;
  record_id: string;
  user_id: string;
  water_count: number;
  weight: number;
  notes: string;

  breakfast: Breakfast;
  lunch: Lunch;
  snack: Snack;
  dinner: Dinner;

  constructor(
    day: number,
    month: number,
    year: number,
    month_name: string,
    record_id: string,
    user_id: string,
    water_count: number,
    weight: number,
    notes: string,
    breakfast: Breakfast,
    lunch: Lunch,
    snack: Snack,
    dinner: Dinner
  ) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.month_name = month_name;
    this.record_id = record_id;
    this.user_id = user_id;
    this.water_count = water_count;
    this.weight = weight;
    this.notes = notes;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.snack = snack;
    this.dinner = dinner;
  }
}
