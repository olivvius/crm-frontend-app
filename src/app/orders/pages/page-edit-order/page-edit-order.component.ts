import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  private id: number;
  public order$: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.order$ = this.ordersService.getItemById(this.id);
  }

  ngOnInit(): void {}

  public action(order: Order) {
    this.ordersService.update(order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
