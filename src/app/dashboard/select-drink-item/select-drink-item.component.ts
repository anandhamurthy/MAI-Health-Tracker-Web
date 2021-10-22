import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { icon_items } from '../icon_items';

@Component({
  selector: 'app-select-drink-item',
  templateUrl: './select-drink-item.component.html',
  styleUrls: ['./select-drink-item.component.css'],
})
export class SelectDrinkItemComponent implements OnInit {
  drink_set: icon_items[] = [];

  constructor(private firebaseServices: FirebaseService) {}

  ngOnInit(): void {
    this.drink_set = this.firebaseServices.readDrinks();
    // for (const drink of this.drink_set) {
    //   this.selected_drink_set.push({
    //     name: drink.name,
    //     id: drink.id,
    //     count: 0,
    //     isSelected: false,
    //   });
    // }
  }

  addFoodItem(id: string) {
    this.firebaseServices.addDrinkItem(id);
    // this.selected_drink_set.find((item_id) => {
    //   if (item_id.id == id) {
    //     item_id.count += 1;
    //     item_id.isSelected = true;
    //   }
    // });
  }

  removeFoodItem(id: string) {
    this.firebaseServices.removeDrinkItem(id);
    // this.selected_drink_set.find((item_id) => {
    //   if (item_id.id == id) {
    //     item_id.count = 0;
    //     item_id.isSelected = false;
    //   }
    // });
  }
}
