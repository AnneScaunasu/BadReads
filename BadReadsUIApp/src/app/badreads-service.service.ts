import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models/book';
import { Bookself } from './models/bookself';
import { User } from './models/user';
import { BookLog } from './models/booklog';

@Injectable({
  providedIn: 'root'
})
export class BadreadsServiceService {

  readonly badReadsAPIUrl = "https://localhost:7020/api";

  constructor(private http:HttpClient) {}

  getBookList(): Observable<Book[]> {
    return this.http.get<any>(this.badReadsAPIUrl + '/books');
  }

  getShelfsListForUser(idUser: number): Observable<Bookself[]> {
    return this.http.get<any>(this.badReadsAPIUrl + '/bookShelves/user/' + idUser);
  }

  login(user: User): Observable<User> {
    return this.http.post<any>(this.badReadsAPIUrl + '/login', user);
  }

  getBookLogList(): Observable<BookLog[]> {
    return this.http.get<any>(this.badReadsAPIUrl + '/BookLogs');
  }

}
