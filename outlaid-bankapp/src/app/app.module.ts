import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuHomeComponent } from './pages/sidemenu-home/sidemenu-home.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, SidemenuHomeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
