import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Champion} from './Champion';



@Injectable({
  providedIn: 'root'
})

export class ChampionService {

  private championURL = 'http://localhost:3000/champions';
  constructor(private http: HttpClient) { }

  //tra ve observable cua champion
  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championURL)
  }


  add(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(this.championURL, champion)
  }
}
