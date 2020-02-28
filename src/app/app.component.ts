import { Component } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {}

  title: string;
  ngOnInit() {
    this.title = '2020 Election Information';
  }

  findStateByZipCode(event: any) {
    const zipCode = event.target.value;
    let clientKey = "uAgblRbg9yxAgO6m2GGVh7KvHdVkydYzajK5MY15pCHlAXPxwlWpCJ74cmekefda";
    const cache = {};
    console.log(zipCode);
    if (zipCode.length === 5 && /^[0-9]+$/.test(zipCode)) {
      if (zipCode in cache) {
        return cache[zipCode];
      } else {
        const url = "https://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zipCode + "/radians";
        this.http.get(url)
          .toPromise()
          .then(data => {
            cache[zipCode] = data;
            alert(data);
          })
          .catch(error => {
            if(error.responseText) {
              cache[zipCode] = error.responseText;
              if (error.responseText.error_msg) {
                //	errorDiv.text(json.error_msg);
              } else {
                //errorDiv.text('Request failed.');
              }
            }
          });
      }
    }
  }
}
