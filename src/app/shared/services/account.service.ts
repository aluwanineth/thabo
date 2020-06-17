import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Account[]>(`${environment.apiUrl}/accounts`);
    }

    register(account: any) {
        console.log(account);
        return this.http.post(`${environment.apiUrl}/accounts/register`, account);
    }
}