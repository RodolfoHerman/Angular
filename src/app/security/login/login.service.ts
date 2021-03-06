import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/do';

import { MEAT_API } from '../../app.api'
import { User } from "./user.model";

@Injectable()
export class LoginService {

    //Necessário para não perder as informações do usuário ao navegar na aplicação
    user: User;

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<User> {

        return this.http.post<User>(`${MEAT_API}/login`, 
                                    {email: email, password: password})
                        .do(user => this.user = user);
    }
    

}