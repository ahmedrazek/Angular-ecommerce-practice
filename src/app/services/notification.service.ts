import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification: string[];

  constructor() {
    this.notification = [
      'you have unread messages',
      'people reacting to your post',
      'Ahmed sent you friend request',
      'Post shared successfully',
    ];
  }
  getNotifications(): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let notInterval = setInterval(() => {
        if (counter == this.notification.length) {
          observer.complete();
        }
        if (this.notification[counter] == '') {
          observer.error();
        }
        observer.next(this.notification[counter]);
        counter++;
      }, 2000);
      return {
        unsubscribe: () => {
          clearInterval(notInterval);
        },
      };
    });
  }
}
