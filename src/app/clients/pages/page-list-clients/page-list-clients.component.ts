import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public myTitle: string;
  public label: string;
  public collection$: BehaviorSubject<Client[]>;
  public states: string[];
  public headers: string[];

  constructor(private clientService: ClientService, private router: Router) {
    this.myTitle = 'List of clients';
    this.label = 'Add client';
    this.collection$ = this.clientService.collection$;
    this.states = Object.values(StateClient);
    this.headers = ['Actions', 'name', 'total ttc', 'Statut'];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = 'le titre a changé';
  }

  public changeState(item: Client, event: any): void {
    const state = event.target.value;
    this.clientService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public goToEdit(id: number): void {
    this.router.navigate(['clients', 'edit', id]);
  }

  public goToDelete(id: number): void {
    this.clientService.delete(id).subscribe((data) => console.log(data));
  }
}
