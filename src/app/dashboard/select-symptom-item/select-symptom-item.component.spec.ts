import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSymptomItemComponent } from './select-symptom-item.component';

describe('SelectSymptomItemComponent', () => {
  let component: SelectSymptomItemComponent;
  let fixture: ComponentFixture<SelectSymptomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSymptomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSymptomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
