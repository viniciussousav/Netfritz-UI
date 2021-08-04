export class Usuario {
    
    public id: string | null;
    public nome: string;
    public email: string;
    public senha: string;
    public dataCriacao: Date | null;

    constructor(nome: string, email: string, senha: string) {
        this.id = null;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCriacao = null;
    }
}