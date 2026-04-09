import { StatusTarefa } from "./Tarefa";

export interface TarefaDto {
  titulo: string;
  descricao: string;
  status: StatusTarefa;
}
