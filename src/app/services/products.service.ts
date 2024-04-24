import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Iproduct[];
  constructor() {
    this.products = [
      {
        id: '1',
        price: 5000,
        categoryId: 1,
        quantity: 5,
        name: 'Iphone',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '2',
        price: 5000,
        categoryId: 1,
        quantity: 5,
        name: 'huawei',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '3',
        price: 5000,
        categoryId: 1,
        quantity: 6,
        name: 'oppo',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '4',
        price: 5000,
        categoryId: 1,
        quantity: 3,
        name: 'xiaomi',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '5',
        price: 10000,
        categoryId: 2,
        quantity: 5,
        name: 'Hp laptop',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '6',
        price: 20000,
        categoryId: 2,
        quantity: 6,
        name: 'Dell laptop',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '7',
        price: 60000,
        categoryId: 2,
        quantity: 4,
        name: 'Asus Laptop',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '8',
        price: 5000,
        categoryId: 3,
        quantity: 7,
        name: 'Ipad',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '9',
        price: 1000,
        categoryId: 3,
        quantity: 2,
        name: 'Lenovo',
        imgUrl: 'https://fakeimg.pl/300/',
      },
      {
        id: '10',
        price: 10000,
        categoryId: 3,
        quantity: 5,
        name: 'Xiaomi pad',
        imgUrl: 'https://fakeimg.pl/300/',
      },
    ];
  }
  getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductsByCatId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.products;
    }
    return this.products.filter((prod) => prod.categoryId == catId);
  }
  getProductByID(prodID: string): Iproduct | null {
    let foundedProduct = this.products.find((prod) => prod.id == prodID);
    return foundedProduct ? foundedProduct : null;
  }
  mapProductsIds() {
    return this.products.map((prod) => prod.id);
  }
}
