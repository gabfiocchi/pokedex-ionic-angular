import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { PokeApiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pokemons: any[] = [];
  constructor(
    private data: DataService,
    private pokeApiService: PokeApiService,
  ) { }

  ngOnInit() {
    this.pokeApiService.getAllPokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons.results;
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
