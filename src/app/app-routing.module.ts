import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChampionsComponent} from './champions/champions.component';
import {AddChampionComponent} from './add-champion/add-champion.component';

const routes: Routes = [
  {path: 'champions', component: ChampionsComponent},
  {path: 'add', component: AddChampionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
