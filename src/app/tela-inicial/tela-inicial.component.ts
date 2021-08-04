import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fita } from '../core/models/Fita';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {


  fitas: Fita[] = []
  busca: string = "";

  constructor(private inicioService: InicioService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.pesquisarFitas("");
  }

  pesquisarFitas(busca: string){
    return this.inicioService.pesquisarFitas(busca).subscribe({
      next: (fitas) => {
        this.fitas = fitas;
      },
      error: () => {
        this.snackbar.open("Não foi possível obter as fitas", "Fechar");
      }
    });
  }
  
}
