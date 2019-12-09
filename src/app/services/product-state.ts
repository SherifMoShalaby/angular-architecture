import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Product } from "../product";


@Injectable()
export class ProductState {
    private $updating = new BehaviorSubject<boolean>(false);
    private $productList = new BehaviorSubject<Product[]>(null);

    isUpdating() {
        return this.$updating.asObservable();
    }

    setUpdating(isUpdating: boolean) {
        this.$updating.next(isUpdating);
    }

    getProductList() {
        return this.$productList.asObservable();
    }

    setProductList(products: Product[]) {
        this.$productList.next(products);
    }

    addProduct(product: Product) {
        const currentValue = this.$productList.getValue();
        currentValue.push(product);
        this.$productList.next(currentValue); // add with your own tech.
    }

    updateProduct(product: Product) {
        const categories = this.$productList.getValue();
        const indexOfUpdated = categories.findIndex(category => category.id === product.id);
        categories[indexOfUpdated] = product;
        this.$productList.next([...categories]);
    }

    removeProduct(product: Product) {
        const currentValue = this.$productList.getValue();
        this.$productList.next(currentValue.filter(category => category !== product));
    }
}