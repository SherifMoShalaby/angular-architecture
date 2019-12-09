import { ProductListFacade } from './../facades/product-list-facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  $productList: Observable<Product[]>;
  isUpdating: boolean;

  constructor(private productFacade: ProductListFacade) {
    productFacade.isUpdating().subscribe((isUpdating) => {
      console.log(isUpdating)
      this.isUpdating = isUpdating;
    })
  }

  ngOnInit() {
    this.$productList = this.productFacade.getProductList();
  }

  onAdd() {
    this.productFacade.addProduct();
  }

  onUpdate(product) {
    this.productFacade.updateProduct(product);
  }
}