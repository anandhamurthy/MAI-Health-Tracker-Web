import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { icon_items } from '../icon_items';

@Component({
  selector: 'app-select-food-item',
  templateUrl: './select-food-item.component.html',
  styleUrls: ['./select-food-item.component.css'],
})
export class SelectFoodItemComponent implements OnInit {
  food_set: icon_items[] = [];

  constructor(private firebaseServices: FirebaseService) {}

  ngOnInit(): void {
    this.food_set = this.firebaseServices.readFoods();
  }

  addFoodItem(id: string) {
    this.firebaseServices.addFoodItem(id);
  }

  removeFoodItem(id: string) {
    this.firebaseServices.removeFoodItem(id);
  }
}
