using TaskManagerApi.DTOs;
using TaskManagerApi.Models;
using TaskManagerApi.Repositories;

namespace TaskManagerApi.Services
{
    public class TarefaService : ITarefaService
    {
        private readonly ITarefaRepository _repository;

        public TarefaService(ITarefaRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Tarefa>> GetAllAsync() =>
            await _repository.GetAllAsync();

        public async Task<Tarefa?> GetByIdAsync(int id) =>
            await _repository.GetByIdAsync(id);

        public async Task<Tarefa> CreateAsync(TarefaDto dto)
        {
            var tarefa = new Tarefa
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                Status = dto.Status
            };
            return await _repository.CreateAsync(tarefa);
        }

        public async Task<Tarefa?> UpdateAsync(int id, TarefaDto dto)
        {
            var tarefa = new Tarefa
            {
                Titulo = dto.Titulo,
                Descricao = dto.Descricao,
                Status = dto.Status
            };
            return await _repository.UpdateAsync(id, tarefa);
        }

        public async Task<bool> DeleteAsync(int id) =>
            await _repository.DeleteAsync(id);
    }
}