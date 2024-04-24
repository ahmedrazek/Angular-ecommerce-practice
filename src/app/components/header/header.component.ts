import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { changeLanguage } from '../../store/language/language.action';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn!: boolean;
  counter: Observable<number>;
  language$: Observable<string>;
  lang!: string;
  constructor(
    private userAuthSer: UserAuthService,
    private store: Store<{ counter: number; language: string }>
  ) {
    this.counter = this.store.select('counter');
    this.language$ = this.store.select('language');
    this.language$.subscribe((lang) => {
      this.lang = lang;
    });
  }
  ngOnInit(): void {
    // this.isUserLoggedIn = this.userAuthSer.getUseLogged();
    this.userAuthSer.getAuthSubject().subscribe({
      next: (status) => {
        this.isUserLoggedIn = status;
      },
    });
  }
  changeLang() {
    this.store.dispatch(
      changeLanguage({ lang: this.lang == 'en' ? 'en' : 'ar' })
    );
  }
}
