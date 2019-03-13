import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChampionsComponent} from './champions/champions.component';

const routes: Routes = [
  {path: 'champions', component: ChampionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
