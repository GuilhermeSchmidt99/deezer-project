import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesDeezerService {

  constructor(private http: HttpClient) { }

  getSongs() {
    const options = {headers:{
      'X-RapidAPI-Key': 'd469b57802msh9f325b6bd53faa7p15cee9jsn2f4b7c5bf3cd',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'}}
    this.http.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/1111141961', options).subscribe(Date => {console.log(Date)})
  }
}
