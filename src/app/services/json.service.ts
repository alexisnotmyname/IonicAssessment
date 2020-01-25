import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {
   }

   public getJSON() {
    // return this.http.get("./assets/crypto.json");
    return new Promise(resolve => {
      this.http.get("./assets/crypto.json").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
