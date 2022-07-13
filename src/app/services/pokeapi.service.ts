import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  url: string;
  constructor(
    private http: HttpClient
  ) {
    // this.url = 'https://workshop-nestjs-pokeapi.vercel.app';
    this.url = 'http://localhost:3001';
  }


  getAllPokemons() {
    return this.http.get(this.url + '/pokemons');
  }
}
