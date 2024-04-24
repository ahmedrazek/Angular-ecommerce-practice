import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { Icategory } from '../../Models/icategory';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  categories: Icategory[];
  newProduct: Iproduct = {} as Iproduct;
  prodId: string = '';
  currentId!: number;
  constructor(
    private apiProductSer: ApiProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.categories = [
      { id: 1, name: 'Mobiles' },
      { id: 2, name: 'Laptop' },
      { id: 3, name: 'Tablets' },
    ];
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((map) => {
      if (map.get('id')) {
        this.currentId = Number(map.get('id'));

        this.apiProductSer.getProductById(this.currentId).subscribe({
          next: (res) => {
            this.newProduct = res;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
    this.apiProductSer.getAllProducts().subscribe({
      next: (res) => {
        let idsArr = res.map((prod) => {
          return Number(prod.id);
        });
        this.prodId = String(idsArr[idsArr.length - 1] + 1);
      },
    });
  }
  addNewProduct() {
    this.newProduct.id = this.prodId;
    this.apiProductSer.addProduct(this.newProduct).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Your product has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/Products');
      },
      error: (err) => {},
    });
  }
  updateProduct() {
    this.apiProductSer
      .updateProduct(String(this.currentId), this.newProduct)
      .subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Your product has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigateByUrl('/Products');
        },
        error: (err) => {},
      });
  }
}
