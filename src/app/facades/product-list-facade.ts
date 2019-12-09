import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';
import { Product } from './../product';
import { ProductState } from './../services/product-state';
import { ProductApi } from './../services/products-api';
import { Injectable } from '@angular/core';
import * as  uuid from 'uuid';
@Injectable()
export class ProductListFacade {
  constructor(private productState: ProductState, private productApi: ProductApi) {
    this.loadProductList().subscribe();
  }

  isUpdating(): Observable<boolean> {
    return this.productState.isUpdating();
  }

  getProductList(): Observable<Product[]> {
    return this.productState.getProductList();
  }

  loadProductList(): Observable<Product[]> {
    return this.productApi.getProducts().pipe(tap(products => this.productState.setProductList(products)));
  }

  addProduct() {
    const product = new Product();
    this.productState.addProduct(product);
    this.productApi.addProduct(product).subscribe(() => {
      product.id = uuid();
    },
      err => this.productState.removeProduct(product),
      () => this.productState.setUpdating(false));
  }

  updateProduct(product: Product) {
    this.productState.setUpdating(true);
    this.productApi.updateProduct(product).pipe(first()).subscribe(() => {
      this.productState.updateProduct(product);
    },
      err => console.log(err),
      () => { console.log('finally'); this.productState.setUpdating(false) });
  }

}