import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordItemComponent } from './create-record-item.component';

describe('CreateRecordItemComponent', () => {
  let component: CreateRecordItemComponent;
  let fixture: ComponentFixture<CreateRecordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecordItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
