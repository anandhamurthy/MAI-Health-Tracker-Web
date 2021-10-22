import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { RemindersComponent } from './reminders/reminders.component';
import { PredictorsComponent } from './predictors/predictors.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RecordItemComponent } from './record-item/record-item.component';
import { CreateRecordItemComponent } from './create-record-item/create-record-item.component';
import { SelectFoodItemComponent } from './select-food-item/select-food-item.component';
import { SelectDrinkItemComponent } from './select-drink-item/select-drink-item.component';
import { SelectSymptomItemComponent } from './select-symptom-item/select-symptom-item.component';
import { IconItemComponent } from './icon-item/icon-item.component';
import { TypeItemComponent } from './type-item/type-item.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    MyStatsComponent,
    RemindersComponent,
    PredictorsComponent,
    UserProfileComponent,
    RecordItemComponent,
    TypeItemComponent,
    IconItemComponent,
    CreateRecordItemComponent,
    SelectFoodItemComponent,
    SelectDrinkItemComponent,
    SelectSymptomItemComponent,
    IconItemComponent,
    TypeItemComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, NgbModule],
  exports: [
    DashboardComponent,
    MyStatsComponent,
    RemindersComponent,
    PredictorsComponent,
    UserProfileComponent,
    RecordItemComponent,
    TypeItemComponent,
    IconItemComponent,
    CreateRecordItemComponent,
    SelectFoodItemComponent,
    SelectDrinkItemComponent,
    SelectSymptomItemComponent,
  ],
})
export class DashboardModule {}
