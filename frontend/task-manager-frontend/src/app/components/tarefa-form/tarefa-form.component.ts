import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { TarefaDto } from '../../models/TarefaDto';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './tarefa-form.component.html',
  styleUrl: './tarefa-form.component.css'
})
export class TarefaFormComponent implements OnInit {
  form!: FormGroup;
  tarefaId: number | null = null;
  editando = false;
  statusOptions: string[] = ['Pendente', 'Concluida'];

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', Validators.required, Validators.maxLength(100)],
      descricao: ['', Validators.maxLength(300)],
      status: ['Pendente', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tarefaId = +id;
      this.editando = true;
      this.carregarTarefa(this.tarefaId);
    }
  }

  carregarTarefa(id: number): void {
    this.tarefaService.buscarPorId(id).subscribe({
      next: (tarefa) => {
        this.form.patchValue({
          titulo: tarefa.titulo,
          descricao: tarefa.descricao,
          status: tarefa.status
        });
      },
      error: (erro) => {
        console.error('Erro ao carregar tarefa: ', erro);
      }
    })
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dto: TarefaDto = this.form.value;

    if (this.editando && this.tarefaId != null){
      this.tarefaService.atualizar(this.tarefaId, dto).subscribe({
        next: () => this.router.navigate(['/tarefas']),
        error: (erro) => console.error('Erro ao atualizar tarefa: ', erro)
      });
    } else {
      this.tarefaService.criar(dto).subscribe({
        next: () => this.router.navigate(['/tarefas']),
        error: (erro) => console.error('Erro ao criar tarefa: ', erro)
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/tarefas']);
  }
}
