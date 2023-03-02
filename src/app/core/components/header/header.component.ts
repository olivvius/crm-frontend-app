import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';
import { User } from '../../models/user';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public version!: number;
  public user$!: Subject<User | null>;

  constructor(
    private versionService: VersionService,
    private authService: AuthService
  ) {
    this.user$ = this.authService.user$;

    this.versionService.numVersion.subscribe(
      (number) => (this.version = number)
    );
  }

  ngOnInit(): void {}

  public signOut(): void {
    this.authService.signOut();
  }

}
