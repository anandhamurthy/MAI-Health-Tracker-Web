import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css'],
})
export class TypeItemComponent implements OnInit {
  @Input() item!: any;
  @Input() type!: string;
  constructor() {}

  ngOnInit(): void {}
}
