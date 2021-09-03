import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiBaseUrl}/users`);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiBaseUrl}/users`, user);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${environment.apiBaseUrl}/users`, user);
  }

  delete(id: string) {
    return this.httpClient.delete<User>(`${environment.apiBaseUrl}/users/${id}`);
  }
}
