import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, ProductComponent, SlideShowComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
