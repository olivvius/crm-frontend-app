import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  public client: Client;

  constructor(private clientService: ClientService, private router: Router) {
    this.client = new Client();
  }

  ngOnInit(): void {}

  public action(client: Client) {
    this.clientService.add(client).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
