import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Administrador } from '../core/models/Administrador';
import { Cliente } from '../core/models/Cliente';
import { LoginService } from './login.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {


  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private snackbar: MatSnackBar) { }

  ngOnInit(): void { }

  login(email: string, senha: string) {
    return this.loginService.login(email, senha).subscribe({
      next: (user) => {
        if (user instanceof Cliente) {
          console.log("Cliente", user);
        } else {
          console.log("Administrador", user as Administrador);
        }
      },
      error: () => {
        this.snackbar.open("Erro ao realizar login", "Fechar");
      }
    });
  }

}
