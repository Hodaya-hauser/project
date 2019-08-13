import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http:HttpClient,private r:Router) { }

  ngOnInit() {
  }
  // chtinfo(){ this.r.navigate(["chtinfo"]);}
  // besadnoinfo(){ this.r.navigate(["besadnoinfo"]);}
  // writeinfo(){ this.r.navigate(["writeinfo"]);}
}
