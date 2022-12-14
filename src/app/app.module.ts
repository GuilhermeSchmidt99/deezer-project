import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BaseboardComponent } from './baseboard/baseboard.component';
import { DeezerLogoComponent } from './deezer-logo/deezer-logo.component';
import { SearchComponent } from './search/search.component';
import { MusicInformationComponent } from './music-information/music-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BaseboardComponent,
    DeezerLogoComponent,
    SearchComponent,
    MusicInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
