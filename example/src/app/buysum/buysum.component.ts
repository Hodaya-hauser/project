import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigateServiceService } from '../navigate-service.service';

@Component({
  selector: 'app-buysum',
  templateUrl: './buysum.component.html',
  styleUrls: ['./buysum.component.css']
})
export class BuysumComponent implements OnInit {

  constructor(private http:HttpClient,private r:Router,private service:NavigateServiceService) { }

  ngOnInit() {
  }
  buyconnect(){this.service.NextPAge("buyconnect");

    // this.r.navigate(["buyconnect"]);
  }
}
