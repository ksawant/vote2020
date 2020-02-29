import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StatePollingComponent} from "../state-polling/state-polling.component";
import {PollingSearchComponent} from "../polling-search/polling-search.component";
import {HomeComponent} from "../home/home.component";
import {PoliticalPartiesComponent} from "../political-parties/political-parties.component";
import {RegisterSearchComponent} from "../register-search/register-search.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-state-search', component: RegisterSearchComponent },
  { path: 'polling-state-search', component: PollingSearchComponent },
  { path: 'polling/:state', component: StatePollingComponent },
  { path: 'political-parties', component: PoliticalPartiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
