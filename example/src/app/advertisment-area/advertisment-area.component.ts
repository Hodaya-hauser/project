import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisment-area',
  templateUrl: './advertisment-area.component.html',
  styleUrls: ['./advertisment-area.component.css']
})
export class AdvertismentAreaComponent implements OnInit {
  products:string[];
  arr:number[];
  constructor() {this.products=["תמונה","תאור","מחיר"];
this.arr=[1,2,3];}
onFileChanged(event) {
  const file = event.target.files[0]
}
  ngOnInit() {
  }

}
