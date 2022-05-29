import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient){}
  getData(country1: string,country2: string, amount: any ){
      let url ='https://v6.exchangerate-api.com/v6/9dc183f32290867a18689f46/pair/'+country1+'/'+country2+'/'+amount
      return this.http.get(url);
  }
  getCurrency(){
    let url ="https://v6.exchangerate-api.com/v6/9dc183f32290867a18689f46/latest/UAH"
    return this.http.get(url);
  }
  
}
