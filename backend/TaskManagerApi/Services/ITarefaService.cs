using TaskManagerApi.DTOs;
using TaskManagerApi.Models;

namespace TaskManagerApi.Services
{
    public interface ITarefaService
    {
        Task<IEnumerable<Tarefa>> GetAllAsync();
        Task<Tarefa?> GetByIdAsync(int id);
        Task<Tarefa> CreateAsync(TarefaDto dto);
        Task<Tarefa?> UpdateAsync(int id, TarefaDto dto);
        Task<bool> DeleteAsync(int id);
    }
}