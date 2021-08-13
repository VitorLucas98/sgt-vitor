import { Comentario } from "./comentario";

export interface Tarefa{
    id?: any;
    titulo: String;
    tipoTarefa: String;
    dataInicial: String;
    dataPrevista: String;
    dataEfetiva: String;
    status: String;
    comentarios: Comentario[];
    idResponsavel: any;
}
