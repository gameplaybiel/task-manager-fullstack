namespace TaskManagerApi.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public StatusTarefa Status { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.UtcNow;
    }
}