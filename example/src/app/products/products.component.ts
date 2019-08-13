import { Component, OnInit, HostListener } from '@angular/core';
import { JsonpClientBackend } from '@angular/common/http';
import { element } from '@angular/core/src/render3';
import { nis } from '../nis';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @HostListener("click")onclick(){
  //   (<HTMLElement>event.deepPath.).style.visibility="visible";
  // }
products:string[];
categoryts:string[];
arr:number[];
nnn:nis[]=[{cost:1,discraption:"discraption1",img:"img1",costbsdno:11,item:"item1"},
            {cost:2,discraption:"discraption2",img:"img2",costbsdno:22,item:"item2"},
            {cost:3,discraption:"discraption3",img:"img3",costbsdno:33,item:"item3"}];
n:number;
  constructor() {
    this.products=["תמונה","תאור","מחיר"];
    this.categoryts=["category1","category2","category3"];
    this.arr=[1,2,3];
  }
  ngOnInit() {
  }

}
