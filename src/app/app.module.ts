import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { StateSearchComponent } from './state-search/state-search.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PoliticalPartiesComponent } from './political-parties/political-parties.component';

@NgModule({
  declarations: [
    AppComponent,
    StateComponent,
    StateSearchComponent,
    HomeComponent,
    NavBarComponent,
    PoliticalPartiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
