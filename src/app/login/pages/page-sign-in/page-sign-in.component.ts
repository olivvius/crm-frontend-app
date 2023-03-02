import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss'],
})
export class PageSignInComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public action(obj: any) {
    this.authService.signIn(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
