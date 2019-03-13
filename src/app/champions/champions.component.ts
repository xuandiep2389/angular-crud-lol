import { Component, OnInit } from '@angular/core';
import {Champion} from '../Champion';
import {ChampionService} from '../champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Champion[];

  /** tiem ChampionService de co the dung duoc
   * trong champions component
   * @param championService
   */
  constructor(private championService: ChampionService) { }

  //goi ham getChampions() trong ngOnInit la best practice
  ngOnInit() {
    this.getChampions();
  }

  //ham de lay tat ca cac champion tu API va gan vao mang champions
  getChampions(): void {
    this.championService.getChampions().subscribe(champions => this.champions = champions)
  }
}
