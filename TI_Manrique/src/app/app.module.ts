import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { APlogoComponent } from './components/aplogo/aplogo.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    APlogoComponent,
    SocialComponent,
    BannerComponent,
    LogoAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
