import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDrinkItemComponent } from './select-drink-item.component';

describe('SelectDrinkItemComponent', () => {
  let component: SelectDrinkItemComponent;
  let fixture: ComponentFixture<SelectDrinkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDrinkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDrinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
