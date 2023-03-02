import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  private id: number;
  public client$: Observable<Client>;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.client$ = this.clientService.getItemById(this.id);
  }

  ngOnInit(): void {}

  public action(client: Client) {
    this.clientService.update(client).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
