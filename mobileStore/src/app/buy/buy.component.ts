import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  imageUrl:string = 'assets/images/';
  image :string = "motorola-moto-m-.jpeg";
  constructor() { }

  ngOnInit() {
  }

}
