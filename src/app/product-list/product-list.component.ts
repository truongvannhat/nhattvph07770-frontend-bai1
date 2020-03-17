import { Component, OnInit } from '@angular/core';
import {Product} from "../Product"
import { from } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product: Product={
  id:1,
  name :"item 1",
  price: 20.87,
  desc: "Mô tả item 1",
  status: true,
  img:"http://placehold.it/700x400",
}
  changeStatus(){
    this.product.status= !this.product.status
  }
  changeName(e){
    this.product.name= e.target.value
  }
  
}
