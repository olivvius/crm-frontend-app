import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  public close: boolean;
  public user!: User | null

  constructor(private authService: AuthService) {
    this.close = false;
    this.authService.user$.subscribe((data) => {
      this.user = data;
    });
  }

  ngOnInit(): void {}

  public toggle(): void {
    this.close = !this.close;
  }
}
