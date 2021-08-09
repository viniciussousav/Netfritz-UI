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
  imagem: File | null = null;

  constructor(private fitaService: FitasService, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrarFita(fita: Fita) {
    return this.fitaService.cadastrarFita(fita).subscribe({
      next: (fitaResult) => {

        console.log(fitaResult.id);

        if (this.imagem != null) {
          this.fitaService.uploadImagem(this.imagem, fitaResult.id).subscribe({
            next: () => {
              this.snackBar.open("Fita cadastrada com sucesso", "Fechar");
            },
            error: () => {
              this.snackBar.open("Fita cadastrada com sucesso sem a capa", "Fechar");
            }
          })
        }
        this.fita = new Fita("", "", 10, 2021, "");
      },
      error: () => {
        this.snackBar.open("Erro ao cadastrar fita", "Fechar");
      }
    });
  }

  imageInputChange(fileInputEvent: any) {
    this.imagem = fileInputEvent.target.files[0];
  }

}
