import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RegisterComponent } from './components/register/register.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    FooterComponent,
    OrderComponent,
    RouterOutlet,
    SpinnerComponent,
    RegisterComponent,
  ],
})
export class AppComponent {
  title = 'Day-2';
  dir: string = 'ltr';
  language$: Observable<string>;
  constructor(private store: Store<{ language: string }>) {
    this.language$ = this.store.select('language');
    this.language$.subscribe((lang) => {
      this.dir = lang == 'en' ? 'ltr' : 'rtl';
    });
  }
}
