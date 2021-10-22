import { Component, Input, OnInit } from '@angular/core';
import { Records } from 'src/app/models/records';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.css'],
})
export class RecordItemComponent implements OnInit {
  @Input() item!: Records;

  constructor(private firebaseServices: FirebaseService) {}

  ngOnInit(): void {
    console.log(this.item.snack);
  }
}
