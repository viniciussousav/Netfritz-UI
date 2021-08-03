import { Usuario } from "./Usuario";

export class Administrador extends Usuario {
   
    constructor(nome: string, email: string, senha: string) {
        super(nome, email, senha);
    }
}