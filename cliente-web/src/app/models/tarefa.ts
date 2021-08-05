import { Comentario } from "./comentario";

export interface Tarefa{
    id?: Number;
    titulo: String;
    dataInicial: String;
    dataPrevista: String;
    dataEfetiva: String;
    status: String;
    comentarios: Comentario[];
    idResponsavel: Number;
}
