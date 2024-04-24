import { Component } from '@angular/core';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Iorder } from '../../Models/iorder';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  categories: Icategory[];
  selectedCatId: number = 0;
  orders: Iorder[] = [];
  constructor(private ProductsService: ProductsService) {
    this.categories = [
      { id: 1, name: 'Mobiles' },
      { id: 2, name: 'Laptop' },
      { id: 3, name: 'Tablets' },
    ];
  }
  receiveOrder(order: Iorder) {
    this.orders.push(order);
  }
  remove(order: Iorder) {
    this.orders = this.orders.filter((ord) => ord.id != order.id);
    order.quantity += order.productCount;
  }
}
