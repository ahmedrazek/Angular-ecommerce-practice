import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'AddProduct/:id', component: AddProductComponent },
  {
    path: 'Products',
    loadComponent: () =>
      import('./components/product/product.component').then(
        (obj) => obj.ProductComponent
      ),
    canActivate: [authGuardGuard],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'About',
    component: AboutUsComponent,
  },
  { path: 'Details/:id', component: DetailsComponent },
  { path: 'order', component: OrderComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
