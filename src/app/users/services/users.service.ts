import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { StateUser } from 'src/app/core/enums/state-user';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private collection$: BehaviorSubject<User[]>;
  private urlApi: string;

  constructor(private httpCLient: HttpClient) {
    this.collection$ = new BehaviorSubject<User[]>([new User()]);
    this.urlApi = environment.urlApi;

    this.refreshCollection();
  }

  public refreshCollection() {
    this.httpCLient
      .get<User[]>(`${this.urlApi}/users`)
      .pipe(
        map((datas) => {
          return datas.map((data) => {
            delete data.password;
            return data;
          });
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public get collection(): Observable<User[]> {
    return this.collection$;
  }

  public changeState(item: User, state: StateUser): Observable<User> {
    let obj = new User(item);
    obj.grants = state;
    return this.update(obj);
  }

  public update(item: User): Observable<User> {
    return this.httpCLient
      .patch<User>(`${this.urlApi}/users/${item.id}`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  public add(item: User): Observable<any> {
    return this.httpCLient
      .post<User>(`${this.urlApi}/register`, item)
      .pipe(tap(() => this.refreshCollection()));
  }

  public delete(id: number): Observable<User> {
    return this.httpCLient.delete<User>(`${this.urlApi}/users/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getItemById(id: number): Observable<User> {
    return this.httpCLient.get<User>(`${this.urlApi}/users/${id}`).pipe(
      map((data) => {
        delete data.password;
        return data;
      }),
      tap((data) => console.log(data))
    );
  }
}
