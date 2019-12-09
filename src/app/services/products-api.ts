import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../product";
import * as data from '../products';

@Injectable()
export class ProductApi {
    getProducts(): Observable<Product[]> {
        return new Observable<Product[]>((observer) => {
            return observer.next(data.products);
        });
    }

    addProduct(product: Product): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            // data.products.push(product);
            return observer.next(true);
        });
    }

    updateProduct(product: Product): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            // const index = data.products.findIndex(prod => prod.id === product.id);
            // data.products.splice(index, 1, product);
            return observer.next(true);
        });
    }

    deleteProduct(product: Product): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            // const index = data.products.findIndex(prod => prod.id === product.id);
            // data.products.splice(index, 1);
            return observer.next(true);
        });
    }
}