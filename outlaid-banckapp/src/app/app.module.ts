import { ConfigurationService } from './services/configuration/configuration.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBarChartComponent } from './controls/my-bar-chart/my-bar-chart.component';
import { HeaderComponent } from './controls/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/transaction/transaction.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { ModelCardComponent } from './controls/model-card/model-card.component';
import { SelectUserComponent } from './pages/select-user/select-user.component';
import { AnotherUserComponent } from './pages/another-user/another-user.component';
import { ComparationComponent } from './pages/comparation/comparation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    HeaderComponent,
    LoginComponent,
    ModelCardComponent,
    SelectUserComponent,
    AnotherUserComponent,
    ComparationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ConfigurationService, TransactionService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
