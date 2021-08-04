import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
 
    cartao: string;
    dataNascimento: Date | null;

    constructor(nome: string, email: string, senha: string, cartao: string, dataNascimento: Date | null) {
        super(nome, email, senha);
        this.cartao = cartao;
        this.dataNascimento = dataNascimento;
    }
}