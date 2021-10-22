import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-create-record-item',
  templateUrl: './create-record-item.component.html',
  styleUrls: ['./create-record-item.component.css'],
})
export class CreateRecordItemComponent implements OnInit {
  water_count: number = 0;
  title: string = '';
  health_status: string = 'Select Point';
  health_count: number = 0;
  constructor(
    private firebaseServices: FirebaseService,
    private activatedRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((data) => {
      this.title = data.id.charAt(0).toUpperCase() + data.id.slice(1);
    });
  }

  submit() {
    console.log(this.firebaseServices.getSelectedDrinkList());
    console.log(this.firebaseServices.getSelectedSymptomList());
    console.log(this.firebaseServices.getSelectedFoodList());
    console.log(this.water_count);
    console.log(this.health_count);
  }

  minusCount() {
    if (this.water_count != 0) {
      this.water_count--;
    }
  }

  plusCount() {
    this.water_count++;
  }

  healthStatus(health: string) {
    this.health_count = Number(health);
    switch (this.health_count) {
      case 0:
        this.health_status = 'Select Point';
        break;
      case 1:
        this.health_status = 'Juck';
        break;
      case 2:
        this.health_status = 'Unhealthy';
        break;
      case 3:
        this.health_status = 'Ok';
        break;
      case 4:
        this.health_status = 'Healthy';
        break;
      case 5:
        this.health_status = 'Super Healthy';
        break;

      default:
        break;
    }
  }
}
