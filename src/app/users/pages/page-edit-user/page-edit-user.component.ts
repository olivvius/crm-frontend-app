import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-page-edit-user',
  templateUrl: './page-edit-user.component.html',
  styleUrls: ['./page-edit-user.component.scss'],
})
export class PageEditUserComponent implements OnInit {
  public user$!: Observable<User>;
  private id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.user$ = this.usersService.getItemById(this.id);
  }

  ngOnInit(): void {}

  public action(item: User): void {
    this.usersService.update(item).subscribe(() => {
      this.router.navigate(['users']);
    });
  }
}
