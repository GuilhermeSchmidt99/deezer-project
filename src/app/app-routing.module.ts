import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MusicInformationComponent } from './music-information/music-information.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'music-information', component: MusicInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
