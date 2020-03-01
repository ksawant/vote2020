import { Component, OnInit } from '@angular/core';
import {States} from "../../const/states";
import {Router} from "@angular/router";
import {GoogleAnalyticsService} from "../google-analytics.service";

@Component({
  selector: 'app-state-search',
  templateUrl: './polling-search.component.html',
  styleUrls: ['./polling-search.component.css']
})
export class PollingSearchComponent implements OnInit {

  constructor(public router: Router, public googleAnalyticsService: GoogleAnalyticsService) { }

  title: string;
  valid: boolean;
  hasRun: boolean;
  stateName: any;
  ngOnInit() {
    this.title = '2020 Election Information';
    this.hasRun = false;
    this.valid = false;
  }

  findURLByState() {
    this
      .googleAnalyticsService
      .eventEmitter("search", "search", "findURLByState", "search", 1);
    this.hasRun = true;
    if(States.doesStateExist(this.stateName)) {
      this.valid = true;
      this.router.navigate(['polling/' + this.stateName]);
    } else {
      this.valid = false;
    }
  }

}
