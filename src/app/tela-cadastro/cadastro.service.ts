import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../core/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: Cliente){
    return this.http.post<Cliente>(environment.url + '/cliente/cadastrar', {
      nome: cliente.nome,
      email: cliente.email,
      senha: cliente.senha,
      cartao: cliente.cartao,
      dataNascimento: cliente.dataNascimento?.toString()
    });
  }
}
