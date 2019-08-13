import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advertisement-extant',
  templateUrl: './advertisement-extant.component.html',
  styleUrls: ['./advertisement-extant.component.css']
})
export class AdvertisementExtantComponent implements OnInit {

  constructor(private http:HttpClient,private r:Router) { }

  ngOnInit() {
  }
  adverismentarea(){ this.r.navigate(["advertisement-area"]);}
}
