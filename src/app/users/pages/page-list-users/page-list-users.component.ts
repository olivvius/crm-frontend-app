import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateUser } from 'src/app/core/enums/state-user';
import { User } from 'src/app/core/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss'],
})
export class PageListUsersComponent implements OnInit {
  public title: string;
  public collection$: Observable<User[]>;
  public states: string[];
  public headers!: string[];

  constructor(private usersService: UsersService, private router: Router) {
    this.title = 'List users';
    this.collection$ = this.usersService.collection;
    this.states = Object.values(StateUser);
    this.headers = ['Actions', 'First name', 'Last name', 'Email', 'Rôles'];
  }

  ngOnInit(): void {}

  public changeState(item: User, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateUser;
    this.usersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public goToEdit(id: number): void {
    this.router.navigate(['users', 'edit', id]);
  }

  public deleteItem(id: number): void {
    this.usersService.delete(id).subscribe();
  }
}
