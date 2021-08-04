import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fita } from '../core/models/Fita';
import { FitasService } from './fitas.service';

@Component({
  selector: 'app-tela-fitas',
  templateUrl: './tela-fitas.component.html',
  styleUrls: ['./tela-fitas.component.css']
})
export class TelaFitasComponent implements OnInit {


  fita: Fita = new Fita("", "", 10, 2021, "");

  constructor(private fitaService: FitasService, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrarFita(fita: Fita) {
    return this.fitaService.cadastrarFita(fita).subscribe({
      next: (fita) => {
        this.fita = new Fita("", "", 10, 2021, "");
        this.snackBar.open("Fita cadastrada com sucesso", "Fechar");
      },
      error: () => {
        this.snackBar.open("Erro ao cadastrar fita", "Fechar");

      }
    })
  }

}
