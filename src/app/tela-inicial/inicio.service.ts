import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fita } from '../core/models/Fita';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private http: HttpClient) { }

  pesquisarFitas(busca: string | null){

    if(busca != null && busca.length > 0){
      return this.http.get<Fita[]>(environment.url + '/pesquisar-fitas');
    }
    return this.http.get<Fita[]>(environment.url + '/pesquisar-fitas?busca=' + busca);
  }
}
