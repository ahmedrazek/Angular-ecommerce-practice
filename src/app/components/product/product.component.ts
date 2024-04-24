import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { NationalIdPipe } from '../../pipes/national-id.pipe';
import { Iorder } from '../../Models/iorder';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective, NationalIdPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges, OnInit {
  products!: Iproduct[];
  filteredProducts: Iproduct[];

  @Input() receivedCatId: number = 0;
  nationalId: number = 0;

  @Output() onOrder: EventEmitter<Iorder>;
  constructor(
    private apiProductsSer: ApiProductsService,
    private router: Router
  ) {
    this.nationalId = 30225036910253;
    // this.products = ProductsService.getAllProducts();

    this.filteredProducts = this.products;
    this.onOrder = new EventEmitter<Iorder>();
  }
  ngOnInit(): void {
    this.apiProductsSer.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.filteredProducts = this.products;
      },
      error: (err) => {},
    });
  }
  ngOnChanges() {
    // this.filteredProducts = this.ProductsService.getProductsByCatId(
    //   this.receivedCatId
    // );
    this.apiProductsSer.getProductsByCatId(this.receivedCatId).subscribe({
      next: (res) => {
        this.filteredProducts = res;
        console.log(this.filteredProducts, Number(this.receivedCatId));
      },
      error: (err) => {},
    });
  }
  buy(val: string, prod: Iproduct) {
    let order: Iorder = { productCount: Number(val), ...prod };

    prod.quantity -= Number(val);

    this.onOrder.emit(order);
  }
  navigateToDetails(id: string) {
    this.router.navigate(['/Details', id]);
  }
  deleteProduct(prodId: string) {
    this.apiProductsSer.deleteProduct(prodId).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Your product has been deleted',
          showConfirmButton: false,
          timer: 1500,
        });
        this.ngOnInit();
      },
    });
  }
  updateProduct(prodId: string) {
    this.router.navigate(['/AddProduct', prodId]);
  }
}
// filterProducts() {
//   if (this.receivedCatId == 0) {
//     this.filteredProducts = this.products;
//   } else {
//     this.filteredProducts = this.products.filter(
//       (prd) => prd.categoryId == this.receivedCatId
//     );
//   }
// }
