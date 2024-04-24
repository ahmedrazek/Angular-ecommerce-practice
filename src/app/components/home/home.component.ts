import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {
  decreaseCounter,
  increaseCounter,
} from '../../store/counter/counter.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  // subscription!: Subscription;
  // notifications: string[] = [];
  counter: Observable<number>;
  constructor(
    private NotificationSer: NotificationService,
    private store: Store<{ counter: number }>
  ) {
    this.counter = this.store.select('counter');
  }

  ngOnInit(): void {
    //   this.subscription = this.NotificationSer.getNotifications().subscribe({
    //     next: (notf: string) => {
    //       this.notifications.push(notf);
    //       console.log(this.notifications);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {},
    //   });
  }
  ngOnDestroy(): void {
    //   this.subscription.unsubscribe();
    // }
    // remove(notf: string) {
    //   this.notifications = this.notifications.filter((notfy) => notfy != notf);
  }
  increaseVal() {
    this.store.dispatch(increaseCounter());
  }
  decreaseVal() {
    this.store.dispatch(decreaseCounter());
  }
}
