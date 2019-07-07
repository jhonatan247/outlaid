import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuHomeComponent } from './pages/sidemenu-home/sidemenu-home.component';
import { LoginComponent } from './pages/login/login.component';

// In app.module.ts
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import { DashboardComponent } from './frames/dashboard/dashboard.component';
// Include Below Snippet
FusionChartsModule.fcRoot(FusionCharts, Column2D);

@NgModule({
  declarations: [AppComponent, SidemenuHomeComponent, LoginComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, FusionChartsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
