import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  products:string[];
  constructor() {this.products=["תמונה","תאור","מחיר"]; }

  ngOnInit() {
  }

}
