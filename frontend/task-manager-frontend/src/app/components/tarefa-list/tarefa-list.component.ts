import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../../models/Tarefa';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TarefaService } from '../../services/tarefa.service';
import { TarefaDeleteComponent } from '../tarefa-delete/tarefa-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tarefa-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './tarefa-list.component.html',
  styleUrl: './tarefa-list.component.css'
})
export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'status', 'dataCriacao', 'acoes'];

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.listar().subscribe({
      next: (dados) => this.tarefas = dados,
      error: (erro) => console.error('Erro ao carregar tarefas: ', erro)
    });
  }

  novaTarefa(): void {
    this.router.navigate(['/tarefas/nova']);
  }

  editarTarefa(id: number): void {
    this.router.navigate(['/tarefas/editar', id]);
  }

  deletarTarefa(id: number, titulo: string): void {
    const dialogRef = this.dialog.open(TarefaDeleteComponent, {
      width: '400px',
      data: { id, titulo }
    });

    dialogRef.afterClosed().subscribe((confirmar) => {
      if (confirmar) {
        this.tarefaService.deletar(id).subscribe({
          next: () => this.carregarTarefas(),
          error: (erro) => console.error('Erro ao deletar esta tarefa: ', erro)
        })
      }
    })
  }
}
