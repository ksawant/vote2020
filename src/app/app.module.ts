import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StatePollingComponent } from './state-polling/state-polling.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { PollingSearchComponent } from './polling-search/polling-search.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PoliticalPartiesComponent } from './political-parties/political-parties.component';
import { RegisterSearchComponent } from './register-search/register-search.component';
import { CandidateComponent } from './candidate/candidate.component';

import { GoogleAnalyticsService } from './google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    StatePollingComponent,
    PollingSearchComponent,
    HomeComponent,
    NavBarComponent,
    PoliticalPartiesComponent,
    RegisterSearchComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
