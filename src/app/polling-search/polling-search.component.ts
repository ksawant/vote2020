import { Component, OnInit } from '@angular/core';
import {States} from "../../const/states";
import {Router} from "@angular/router";

@Component({
  selector: 'app-state-search',
  templateUrl: './polling-search.component.html',
  styleUrls: ['./polling-search.component.css']
})
export class PollingSearchComponent implements OnInit {

  constructor(public router: Router) { }

  title: string;
  valid: boolean;
  hasRun: boolean;
  ngOnInit() {
    this.title = '2020 Election Information';
    this.hasRun = false;
    this.valid = false;
  }

  findURLByState(event: any) {
    this.hasRun = true;
    const state = event.target.value;
    if(States.doesStateExist(state)) {
      this.valid = true;
      this.router.navigate(['polling/' + state]);
    } else {
      this.valid = false;
    }
  }

}
