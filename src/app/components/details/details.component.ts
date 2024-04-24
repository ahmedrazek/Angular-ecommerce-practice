import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  product: Iproduct | null = null;
  idsArr!: number[] | void[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProductSer: ApiProductsService,
    private Location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map) => {
      this.currentId = Number(map.get('id'));

      this.apiProductSer.getProductById(this.currentId).subscribe({
        next: (res) => {
          this.product = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
    this.apiProductSer.getAllProducts().subscribe({
      next: (res) => {
        this.idsArr = res.map((prod) => {
          return Number(prod.id);
        });
      },
    });
  }

  goBack() {
    this.Location.back();
  }
  next() {
    let currentIndex = this.idsArr.findIndex((id) => id == this.currentId);
    if (currentIndex == this.idsArr.length - 1) {
      currentIndex = -1;
    }
    this.router.navigateByUrl(`/Details/${this.idsArr[currentIndex + 1]}`);
  }
  prev() {
    let currentIndex = this.idsArr.findIndex((id) => id == this.currentId);
    if (currentIndex == 0) {
      currentIndex = this.idsArr.length;
    }
    this.router.navigateByUrl(`/Details/${this.idsArr[currentIndex - 1]}`);
  }
}
