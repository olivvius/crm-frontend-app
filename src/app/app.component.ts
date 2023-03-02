import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title: string;
  public test$: BehaviorSubject<any>;
  public sub: Subscription;

  constructor() {
    this.title = 'Mon crm';
    this.test$ = new BehaviorSubject<any>(1);
    this.sub = this.test$.subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
