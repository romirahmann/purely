import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private loginSuccessSubject: Subject<any> = new Subject<any>();

  loginSuccessEvent: Observable<any> = this.loginSuccessSubject.asObservable();

  constructor() {}

  emitLoginSuccess(data: any) {
    this.loginSuccessSubject.next(data);
    console.log('Event emitted:', data);
  }
}
