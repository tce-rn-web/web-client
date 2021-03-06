import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public constructor(private http: HttpClient) {}

    public login(user: User): Observable<User> {
        return this.http.post<User>(`${environment.apiSistema}/`, user)
            .pipe(
                tap((response: User) => this.setSession(response))
            );
    }

    public setSession(user: User): void {
        // TODO: Adicionar token aqui
        // localStorage.setItem('token', user.getToken());
        // localStorage.setItem('expires_at', user.expiration);
    }

    public logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
    }
}