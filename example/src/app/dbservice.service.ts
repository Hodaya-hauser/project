import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  url:string="http://localhost:2400/";
  constructor(private http:HttpClient) { }
    //  get(art:number)
    //  {
    //    return this.http.get('/api/artist'+art)
    //   }
    //   getnull()
    //   {
    //     return this.http.get('/api/artist')
    //    }
}
// this.url+
