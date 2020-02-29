import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {States} from "../../const/states";

@Component({
  selector: 'app-register-search',
  templateUrl: './register-search.component.html',
  styleUrls: ['./register-search.component.css']
})
export class RegisterSearchComponent implements OnInit {

  constructor(public router: Router) { }

  title: string;
  valid: boolean;
  hasRun: boolean;
  url: string;
  ngOnInit() {
    this.title = '2020 Election Information';
    this.hasRun = false;
    this.valid = false;
    this.url = '';
  }

  findURLByState(event: any) {
    this.hasRun = true;
    const state = event.target.value;
    let abbreviation = States.getStateAbbreviation(state);
    if(abbreviation != null) {
      this.valid = true;
      this.url = 'https://www.vote.gov/register/' + abbreviation + '/';
    } else {
      this.valid = false;
      this.url = '';
    }
  }

}
