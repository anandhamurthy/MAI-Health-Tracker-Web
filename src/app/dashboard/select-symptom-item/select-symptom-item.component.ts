import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { icon_items } from '../icon_items';

@Component({
  selector: 'app-select-symptom-item',
  templateUrl: './select-symptom-item.component.html',
  styleUrls: ['./select-symptom-item.component.css'],
})
export class SelectSymptomItemComponent implements OnInit {
  symptom_set: icon_items[] = [];

  constructor(private firebaseServices: FirebaseService) {}

  ngOnInit(): void {
    this.symptom_set = this.firebaseServices.readSymptoms();
  }

  addFoodItem(id: string) {
    this.firebaseServices.addSymptomItem(id);
  }

  removeFoodItem(id: string) {
    this.firebaseServices.removeSymptomItem(id);
  }
}
