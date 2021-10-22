import { Component, OnInit, Input } from '@angular/core';
import { Icon } from 'src/app/models/icon';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.css'],
})
export class IconItemComponent implements OnInit {
  @Input() icon_set!: Icon[];

  constructor(private firebaseServices: FirebaseService) {}

  ngOnInit(): void {}
}
