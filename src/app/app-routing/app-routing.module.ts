import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StateComponent} from "../state/state.component";
import {StateSearchComponent} from "../state-search/state-search.component";
import {HomeComponent} from "../home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'state', component: StateSearchComponent },
  { path: 'state/:state', component: StateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
