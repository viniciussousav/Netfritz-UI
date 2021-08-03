export class Usuario {
    
    protected id: string | null;
    protected nome: string;
    protected email: string;
    protected senha: string;
    protected dataCriacao: Date | null;

    constructor(nome: string, email: string, senha: string) {
        this.id = null;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCriacao = null;
    }
}