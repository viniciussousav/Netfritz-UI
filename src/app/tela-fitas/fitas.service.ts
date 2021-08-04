import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fita } from '../core/models/Fita';

@Injectable({
  providedIn: 'root'
})
export class FitasService {

  constructor(private http: HttpClient) { }

  cadastrarFita(fita: Fita){
    return this.http.post<Fita>(environment.url + '/fitas/cadastrar-fita', {
      titulo: fita.titulo,
      descricao: fita.descricao,
      valor: fita.valor,
      ano: fita.ano,
      imagemUrl: ""
    });
  }
}
