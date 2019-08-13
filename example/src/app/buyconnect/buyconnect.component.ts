import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyconnect',
  templateUrl: './buyconnect.component.html',
  styleUrls: ['./buyconnect.component.css']
})
export class BuyconnectComponent implements OnInit {
arr:number[];
  constructor(private http:HttpClient,private r:Router) { 
    this.arr=[1,2,3];}

  ngOnInit() {
  }
  connect(){this.r.navigate(["buy-show-coupon"]);}
}
