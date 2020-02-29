import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {States} from "../../const/states";

@Component({
  selector: 'app-state',
  templateUrl: './state-polling.component.html',
  styleUrls: ['./state-polling.component.css']
})
export class StatePollingComponent implements OnInit {
  state = '';
  url = '';
  private bool = false;
  private sub: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.state = params['state'];
      if(States.doesStateExist(this.state)) {
        this.url = 'https://www.vote.org/state/' + this.state.toLowerCase().replace(' ','-') + '/';
      } else {
        this.router.navigate(['/polling-state-search']);
      }
    });
  }

  load() {
    if(this.bool === false) {
      (<HTMLIFrameElement>document.getElementById("stateIFrame")).src = this.url;
      this.bool = true;
    }
  }

  ngOnDestory() {
    this.sub.unsubscribe();
  }

}
