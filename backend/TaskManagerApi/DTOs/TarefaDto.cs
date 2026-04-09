using System.ComponentModel.DataAnnotations;
using TaskManagerApi.Models;

namespace TaskManagerApi.DTOs
{
    public class TarefaDto
    {
        [Required(ErrorMessage = "O título é obrigatório.")]
        [StringLength(100, ErrorMessage = "O título deve ter 100 caracteres no máximo.")]
        public string Titulo { get; set; }

        [StringLength(300, ErrorMessage = "A descrição deve ter 300 caracteres no máximo.")]
        public string Descricao { get; set; }

        [Required(ErrorMessage = "O status é obrigatório.")]
        [RegularExpression("Pendente|Concluida", ErrorMessage = "O status deve ser 'Pendente' ou 'Concluida.'")]
        public StatusTarefa Status { get; set; }
    }
}