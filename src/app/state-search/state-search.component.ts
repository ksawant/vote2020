import { Component, OnInit } from '@angular/core';
import {States} from "../../const/states";

@Component({
  selector: 'app-state-search',
  templateUrl: './state-search.component.html',
  styleUrls: ['./state-search.component.css']
})
export class StateSearchComponent implements OnInit {

  constructor() { }

  title: string;
  ngOnInit() {
    this.title = '2020 Election Information';
  }

  findURLByState(event: any) {
    const state = event.target.value;
    if(States.doesStateExist(state)) {
      console.log(state);
    }
  }

}
