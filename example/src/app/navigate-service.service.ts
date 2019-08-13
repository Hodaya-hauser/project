import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavigateServiceService {

  constructor(private http:HttpClient,private r:Router) { }
  NextPAge(page:string){
    this.r.navigate([page]);
  }
}
