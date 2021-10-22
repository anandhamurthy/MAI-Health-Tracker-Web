import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { icon_items } from '../dashboard/icon_items';
import { Records } from '../models/records';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isUser = false;
  uid = this.getUid();

  calendar = new Date();

  records: Records[] = [];
  food_sets: icon_items[] = [];
  drink_sets: icon_items[] = [];
  symptom_sets: icon_items[] = [];

  // selected_food_set: selected_items[] = [];
  // selected_drink_set: selected_items[] = [];
  // selected_symptom_set: selected_items[] = [];

  selectedFoodList: icon_items[] = [];
  selectedDrinkList: icon_items[] = [];
  selectedSymptomList: icon_items[] = [];

  constructor(public mAuth: AngularFireAuth, public db: AngularFirestore) {
    this.db
      .collection('Records')
      .doc(this.uid)
      .collection('items')
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.records.push(this.dbConverter(doc.data()));
        });

        // console.log('not loop', this.records.length);

        // for (const rec of this.records) {
        //   console.log('loop', rec);
        // }
      });

    this.food_sets.push({
      name: 'Bakery',
      icon_id: 'Bakery.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Oats',
      icon_id: 'Oats.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Eggs',
      icon_id: 'Eggs.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Fruits',
      icon_id: 'Fruits.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Vegetables',
      icon_id: 'Vegetable.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Rice',
      icon_id: 'Rice.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Wheat',
      icon_id: 'Wheat.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Salad',
      icon_id: 'Salad.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Sweet',
      icon_id: 'Sweet.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Soup',
      icon_id: 'Soup.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Pizza',
      icon_id: 'Pizza.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Burger',
      icon_id: 'Burger.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });
    this.food_sets.push({
      name: 'Noodles',
      icon_id: 'Noodles.svg',
      count: 0,
      selected: false,
      tag: 'food',
    });

    this.drink_sets.push({
      name: 'Water',
      icon_id: 'Water.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Tea',
      icon_id: 'Tea.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Coffee',
      icon_id: 'Coffee.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Soda',
      icon_id: 'Soda.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Milk',
      icon_id: 'Milk.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Juice',
      icon_id: 'Juice.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Energy Drink',
      icon_id: 'Energy Drink.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });
    this.drink_sets.push({
      name: 'Alcohol',
      icon_id: 'Alcohol.svg',
      count: 0,
      selected: false,
      tag: 'drink',
    });

    this.symptom_sets.push({
      name: 'Reflux',
      icon_id: 'Reflux.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Gas',
      icon_id: 'Gas.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Rash',
      icon_id: 'Rash.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Vomiting',
      icon_id: 'Vomiting.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Diarrhea',
      icon_id: 'Diarrhea.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Belly Pain',
      icon_id: 'Belly Pain.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Headache',
      icon_id: 'Headache.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Fatigue',
      icon_id: 'Fatigue.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
    this.symptom_sets.push({
      name: 'Constipation',
      icon_id: 'Constipation.svg',
      count: 0,
      selected: false,
      tag: 'symptom',
    });
  }

  async signIn(email_id: string, password: string) {
    await this.mAuth
      .signInWithEmailAndPassword(email_id, password)
      .then((result) => {
        this.isUser = true;
        localStorage.setItem('user', JSON.stringify(result.user));
      });
  }

  dbConverter(data: any) {
    return new Records(
      data.day,
      data.month,
      data.year,
      data.month_name,
      data.record_id,
      data.user_id,
      data.water_count,
      data.weight,
      data.notes,
      data.breakfast,
      data.lunch,
      data.snack,
      data.dinner
    );
  }

  make(data: any) {
    return {
      day: data.day,
      month: data.month,
      year: data.year,
      month_name: data.month_name,
      record_id: data.record_id,
      user_id: data.user_id,
      water_count: data.water_count,
      weight: data.weight,
      notes: data.notes,
      breakfast: data.breakfast,
      lunch: data.lunch,
      snack: data.snack,
      dinner: data.dinner,
    };
  }

  readRecords() {
    let month_records: Records[] = [];
    for (const item of this.records) {
      if (
        item.month == this.calendar.getMonth() &&
        item.year == this.calendar.getFullYear()
      ) {
        month_records.push(item);
      }
    }
    return month_records;
  }

  readFoods() {
    return this.food_sets;
  }

  readDrinks() {
    return this.drink_sets;
  }

  readSymptoms() {
    return this.symptom_sets;
  }

  logout() {
    this.mAuth.signOut();
    localStorage.removeItem('user');
  }

  getFoodSelectorList() {
    return this.food_sets;
  }

  getDrinkSelectorList() {
    return this.drink_sets;
  }

  getSelectedFoodList() {
    this.selectedFoodList = [];
    for (const food of this.food_sets) {
      if (food.selected) {
        this.selectedFoodList.push({
          name: food.name,
          icon_id: food.icon_id,
          tag: food.tag,
          count: food.count,
          selected: food.selected,
        });
      }
    }

    return this.selectedFoodList;
  }

  getSelectedDrinkList() {
    this.selectedDrinkList = [];
    for (const drink of this.drink_sets) {
      if (drink.selected) {
        this.selectedDrinkList.push({
          name: drink.name,
          icon_id: drink.icon_id,
          count: drink.count,
          tag: drink.tag,
          selected: drink.selected,
        });
      }
    }

    return this.selectedDrinkList;
  }

  getSymptomSelectorList() {
    return this.symptom_sets;
  }

  getSelectedSymptomList() {
    this.selectedSymptomList = [];
    for (const symptom of this.symptom_sets) {
      if (symptom.selected) {
        this.selectedSymptomList.push({
          name: symptom.name,
          icon_id: symptom.icon_id,
          tag: symptom.tag,
          count: symptom.count,
          selected: symptom.selected,
        });
      }
    }

    return this.selectedSymptomList;
  }

  addFoodItem(id: string) {
    this.food_sets.find((item_id) => {
      if (item_id.icon_id == id) {
        item_id.count += 1;
        item_id.selected = true;
      }
    });
  }

  removeFoodItem(id: string) {
    this.food_sets.find((item_id) => {
      if (item_id.icon_id == id) {
        item_id.count = 0;
        item_id.selected = false;
      }
    });
  }

  addDrinkItem(id: string) {
    this.drink_sets.find((item_id) => {
      if (item_id.icon_id == id) {
        item_id.count += 1;
        item_id.selected = true;
      }
    });
  }

  removeDrinkItem(id: string) {
    this.drink_sets.find((item_id) => {
      if (item_id.icon_id == id) {
        item_id.count = 0;
        item_id.selected = false;
      }
    });
  }

  addSymptomItem(id: string) {
    this.symptom_sets.find((item_id) => {
      if (item_id.icon_id == id) {
        item_id.count += 1;
        item_id.selected = true;
      }
    });
  }

  removeSymptomItem(id: string) {
    this.symptom_sets.find((item_id) => {
      if (item_id.icon_id == id) {
        item_id.count = 0;
        item_id.selected = false;
      }
    });
  }

  getUid() {
    let user = localStorage.getItem('user');
    console.log('try logout');
    return JSON.parse(user ? user : '{}').uid;
  }

  getDateFormat() {
    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return month[this.calendar.getMonth()] + ', ' + this.calendar.getFullYear();
  }

  nextDate() {
    console.log(this.calendar.getDate());
    this.calendar.setMonth(this.calendar.getMonth() + 1);
    return this.getDateFormat();
  }

  prevDate() {
    this.calendar.setMonth(this.calendar.getMonth() - 1);
    return this.getDateFormat();
  }
}
