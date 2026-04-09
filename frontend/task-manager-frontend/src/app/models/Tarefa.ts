export type StatusTarefa = 'Pentente' | 'Concluida';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  status: StatusTarefa;
  dataCriacao: string;
}
