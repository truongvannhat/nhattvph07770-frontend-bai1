import { Injectable } from '@angular/core';
import { data } from './MockData';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){
    return this.products;
  }
  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }
  addProduct(){

  }
}