import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewPostComponent } from './new-post/new-post.component';




const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full',
  },
  {
    path:'add-product',
    component: ProductAddComponent,
  },
  {
    path:'product-manager',
    component: ProductManagerComponent,
  },
  {
    path:'home',
    component: ProductListComponent,
  },
  {
    path:'product/:id',
    component: ProductDetailComponent,
  },
  {
    path:'new',
    component: NewPostComponent,
  },
  {
    path:'**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
