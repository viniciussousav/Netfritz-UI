import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Administrador } from '../core/models/Administrador';
import { Cliente } from '../core/models/Cliente';
import { Usuario } from '../core/models/Usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {


  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private snackbar: MatSnackBar, private route: Router) { }

  ngOnInit(): void { }

  login(email: string, senha: string) {
    return this.loginService.login(email, senha).subscribe({
      next: (user: any) => {
        if (user.cartao) {
          this.route.navigateByUrl("inicio");  
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
