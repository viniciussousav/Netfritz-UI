import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
 
    cartao: string;
    dataNascimento: Date;

    constructor(nome: string, email: string, senha: string, cartao: string, dataNascimento: Date) {
        super(nome, email, senha);
        this.cartao = cartao;
        this.dataNascimento = dataNascimento;
    }
}