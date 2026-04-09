using Microsoft.EntityFrameworkCore;
using TaskManagerApi.Data;
using TaskManagerApi.Models;

namespace TaskManagerApi.Repositories
{
    public class TarefaRepository : ITarefaRepository
    {
        private readonly AppDbContext _context;

        public TarefaRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tarefa>> GetAllAsync() =>
            await _context.Tarefas.ToListAsync();

        public async Task<Tarefa?> GetByIdAsync(int id) =>
            await _context.Tarefas.FindAsync(id);

        public async Task<Tarefa> CreateAsync(Tarefa tarefa)
        {
            _context.Tarefas.Add(tarefa);
            await _context.SaveChangesAsync();
            return tarefa;
        }

        public async Task<Tarefa?> UpdateAsync(int id, Tarefa tarefa)
        {
            var existing = await _context.Tarefas.FindAsync(id);
            if (existing == null) return null;

            existing.Titulo = tarefa.Titulo;
            existing.Descricao = tarefa.Descricao;
            existing.Status = tarefa.Status;

            await _context.SaveChangesAsync();
            return existing;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);
            if (tarefa == null) return false;

            _context.Tarefas.Remove(tarefa);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}