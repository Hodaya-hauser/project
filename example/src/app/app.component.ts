import { Component, AfterContentInit, ContentChild, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
// import { artist } from './artist';
import { DbServiceService } from './dbservice.service';
// import { link } from 'fs';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
import {nis}from'./nis';
// import { CardsComponent } from './cards/cards.component';
// import { SearchComponent } from './search/search.component';
//  //templateUrl: './app.component.html',  templateUrl: `
//  <p class="root">
//  <ng-content></ng-content>
//  </p>`,
@Component({
  selector: 'app-root',templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  title = 'example';

constructor(private http:HttpClient,private r:Router) { }
allcoupon(){ this.r.navigate(["allcoupon"]);}
}


