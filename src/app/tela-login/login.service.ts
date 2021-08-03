import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../core/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, senha: string){
    return this.http.post<Usuario>(environment.url + 'login', {
      email: email,
      senha: senha
    });
  }
}
