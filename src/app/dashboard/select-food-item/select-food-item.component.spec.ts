import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFoodItemComponent } from './select-food-item.component';

describe('SelectFoodItemComponent', () => {
  let component: SelectFoodItemComponent;
  let fixture: ComponentFixture<SelectFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFoodItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
