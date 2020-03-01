import { Component } from '@angular/core';
import { States } from "../const/states";
import {NavigationEnd, Router} from "@angular/router";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router){
    this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          console.log(event.urlAfterRedirects);
          gtag('config', 'UA-159292069-1', {'page_path': event.urlAfterRedirects}
          );
        }
      }
    )};
}
