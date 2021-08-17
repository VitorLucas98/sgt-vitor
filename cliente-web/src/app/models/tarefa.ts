
import { Comentario } from "./comentario";

export interface Tarefa{
    id?: any;
    titulo: String;
    tipoTarefa: String;
    dataInicial: any;
    dataPrevista: any;
    dataEfetiva: String;
    status: String;
    comentarios: Comentario[];
    idResponsavel: any;
}
