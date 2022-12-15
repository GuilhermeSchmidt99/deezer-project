import { ServicesDeezerService } from './services-deezer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
constructor(private deezerApi: ServicesDeezerService) {

}

  squares: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  ngOnInit() {
    this.deezerApi.getSongs()
  }
}
