export class Fita {
    id: string;
    titulo: string;
    descricao: string;
    valor: number;
    ano: number;
    imagemUrl: string;

    
    constructor(titulo: string, descricao: string, valor: number, ano: number, imagemUrl: string) {
        this.id = "";
        this.titulo = titulo;
        this.descricao = descricao;
        this.valor = valor;
        this.ano = ano;
        this.imagemUrl = imagemUrl;
    }
}