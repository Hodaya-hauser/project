import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigateServiceService } from '../navigate-service.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
arr:number[];
 
  constructor(private http:HttpClient,private r:Router,private service:NavigateServiceService) {
    this.arr=[1,2,3,4,5,6];
   }

  ngOnInit() {
  }
  advertisementextant(){
    this.r.navigate(["advertisement-extant"]);
  }
}
