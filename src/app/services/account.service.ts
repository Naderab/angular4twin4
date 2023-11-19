import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Account } from '../core/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl : string = environment.baseUrl+"accounts/"
  constructor(private http: HttpClient) { }
  getAllAcounts() {
    return this.http.get<Account[]>(this.apiUrl);
  }

  deleteAccount(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
