import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public order: Order;

  constructor(private ordersService: OrdersService, private router: Router) {
    this.order = new Order();
  }

  ngOnInit(): void {}

  public action(order: Order) {
    this.ordersService.add(order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
