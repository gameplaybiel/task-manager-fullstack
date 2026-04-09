import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tarefa-delete',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './tarefa-delete.component.html',
  styleUrl: './tarefa-delete.component.css'
})
export class TarefaDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<TarefaDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; titulo: string }
  ) {}

  cancelar(): void {
    this.dialogRef.close(false);
  }

  confirmar(): void {
    this.dialogRef.close(true);
  }
}
