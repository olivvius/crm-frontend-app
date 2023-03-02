import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;
  public label: string;
  public collection$: BehaviorSubject<Order[]>;
  public states: string[];
  public headers: string[];

  constructor(private ordersService: OrdersService, private router: Router) {
    this.myTitle = 'List of orders';
    this.label = 'Add order';
    this.collection$ = this.ordersService.collection$;
    this.states = Object.values(StateOrder);
    this.headers = [
      'Actions',
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Statut',
    ];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = 'le titre a changé';
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public goToEdit(id: number): void {
    this.router.navigate(['orders', 'edit', id]);
  }

  public goToDelete(id: number): void {
    this.ordersService.delete(id).subscribe((data) => console.log(data));
  }
}
