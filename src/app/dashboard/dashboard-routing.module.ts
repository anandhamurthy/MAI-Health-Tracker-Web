import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordItemComponent } from './create-record-item/create-record-item.component';
import { DashboardComponent } from './dashboard.component';
import { MyStatsComponent } from './my-stats/my-stats.component';
import { PredictorsComponent } from './predictors/predictors.component';
import { RemindersComponent } from './reminders/reminders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'my-stats', component: MyStatsComponent },
  { path: 'create-record/:id', component: CreateRecordItemComponent },
  { path: 'predictors', component: PredictorsComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
