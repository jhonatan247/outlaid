import { ComparationComponent } from './pages/comparation/comparation.component';
import { AnotherUserComponent } from './pages/another-user/another-user.component';
import { SelectUserComponent } from './pages/select-user/select-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './controls/my-bar-chart/my-bar-chart.component';

const routes: Routes = [
  { path: '', component: MyBarChartComponent },
  { path: 'select-model', component: SelectUserComponent },
  { path: 'another-user', component: AnotherUserComponent },
  { path: 'comparation', component: ComparationComponent },
  { path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
