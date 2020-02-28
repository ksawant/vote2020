import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {States} from "../../const/states";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  state = '';
  url = '';
  private bool = false;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.state = params['state'];
      if(States.doesStateExist(this.state)) {
        console.log(this.state);
        this.url = 'https://www.vote.org/state/' + this.state.toLowerCase().replace(' ','-') + '/';
        console.log(this.url);
      }
    });
  }

  load() {
    if(this.bool == false) {
      (<HTMLIFrameElement>document.getElementById("stateIFrame")).src = this.url;
      this.bool = true;
    }
  }

  ngOnDestory() {
    this.sub.unsubscribe();
  }

}
