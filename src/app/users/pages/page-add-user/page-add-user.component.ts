import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss'],
})
export class PageAddUserComponent implements OnInit {
  public user: User;
  constructor(private router: Router, private usersService: UsersService) {
    this.user = new User();
  }

  ngOnInit(): void {}

  public action(item: User): void {
    this.usersService.add(item).subscribe((data) => {
      this.router.navigate(['users']);
    });
  }
}
