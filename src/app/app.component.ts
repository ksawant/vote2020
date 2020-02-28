import { Component } from '@angular/core';
import { States } from "../const/states";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
