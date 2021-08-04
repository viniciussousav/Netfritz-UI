import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from '../core/models/Cliente';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {


  cliente: Cliente = new Cliente("", "", "", "", null);

  constructor(private cadastroService: CadastroService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  cadastrarCliente(cliente: Cliente){
    return this.cadastroService.cadastrarCliente(cliente).subscribe({
      next: (cliente) => {
        this.router.navigateByUrl('/login');
      }, 
      error: () => {
        this.snackBar.open("Não foi possível cadastrar o cliente", "Fechar");
      }
    })
  }
}
