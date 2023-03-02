import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StateUser } from 'src/app/core/enums/state-user';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token$: BehaviorSubject<string | null>;
  public user$: BehaviorSubject<User | null>;
  private urlApi: string;

  constructor(private http: HttpClient, private router: Router) {
    this.token$ = new BehaviorSubject<string | null>('');
    this.user$ = new BehaviorSubject<User | null>(null);
    this.urlApi = environment.urlApi;
  }

  public signUp(item: any): Observable<any> {
    item.grants = StateUser.USER;
    return this.http.post(`${this.urlApi}/users`, item);
  }

  public signIn(obj: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}/signin`, obj).pipe(
      tap((data) => {
        console.log(data);
        const user = {
          grants: data.user.grants,
          id: data.user.id,
          email: data.user.email,
          firstname: data.user.firstname,
          lastname: data.user.lastname,
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', data.accessToken);
        this.token$.next(data.accessToken);
        this.user$.next(new User(user));
        this.router.navigate(['orders']);
      })
    );
  }

  public signOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.token$.next(null);
    this.user$.next(null);
    this.router.navigate(['sign-in']);
  }
}
