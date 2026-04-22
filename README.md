# Task Manager API
Aplicação web para cadastro e gerenciamento de tarefas, desenvolvida para o desafio técnico do Bootcamp Protagonize Tech Avanade.

### Tecnologias utilizadas:
- .NET 10 (ASP.NET Core Web API)
- Entity Framework Core
- SQL Server
- ORM
- Swagger (documentação de API)
- Angular 17 + Material UI

### Funcionalidades no back-end:
- CRUD Completo
- Validação de dados com Data Annotations
- Uso de enum para status (Pendente / Concluida)
- Persistência de dados com Entity Framework

### Estrutura de projeto do back-end:
- Controllers → Endpoints da API
- Services → Regras de negócio
- Repositories → Acesso ao banco de dados
- DTOs → Transferência de dados
- Models → Entidades do sistema

### Endpoints da API no back-end
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /tarefa | Listar todas as tarefas |
| GET | /tarefa/{id} | Buscar tarefa por ID |
| POST | /tarefa | Criar nova tarefa |
| PUT | /tarefa/{id} | Atualizar tarefa |
| DELETE | /tarefa/{id} | Excluir tarefa |

## Exemplo de requisição da API:
```json
{
  "titulo": "Estudar Angular",
  "descricao": "Front-end",
  "status": "Concluida"
}
```

## Resposta da API:
```json
[
    {
        "id": 3,
        "titulo": "Testando API",
        "descricao": "API funcionando corretamente",
        "status": "Pendente",
        "dataCriacao": "2026-04-09T13:27:19.6037987"
    },
    {
        "id": 4,
        "titulo": "Estudar Angular",
        "descricao": "Explorando os conceitos de framework Angular",
        "status": "Concluida",
        "dataCriacao": "2026-04-09T14:04:50.1105823"
    },
    {
        "id": 5,
        "titulo": "Estudando back-end",
        "descricao": "Explorando os conceitos de back-end",
        "status": "Pendente",
        "dataCriacao": "2026-04-09T19:42:25.8632915"
    },
    {
        "id": 6,
        "titulo": "Explorando a linguagem de programação C#",
        "descricao": "Estudando do básico ao avançado",
        "status": "Concluida",
        "dataCriacao": "2026-04-09T19:43:24.7642239"
    }
]
```

### Testes
A API pode ser testada via Swagger ou ferramentas de teste como Postman.

### Observações:
- O campo Status utiliza enum (Pendente, Concluida)
- Os dados são persistidos no SQL Server
- A API segue o padrão REST

### Demonstração do Projeto no back-end:
![Documentação do API](img/documentacao-API.png)
![SQL Server](img/SQL-SERVER.png)

## 🌐 Front-end

Aplicação desenvolvida em Angular 17 para consumo da API.

### Funcionalidades:
- Listagem de tarefas
- Criação de tarefas
- Edição de tarefas
- Exclusão de tarefas

## Demonstração do Projeto no front-end:
![Demonstracao do Front-end](img/demonstracao-Front.png)

---

## Configuração do banco de dados
 
1. Certifique-se de ter o **SQL Server** rodando localmente.
2. No back-end, copie o arquivo de exemplo e ajuste com suas credenciais:
```bash
cd backend/TaskManagerApi
dotnet run
```
 
API disponível em: `http://localhost:5000`  
Swagger em: `http://localhost:5000/swagger`
 
### Front-end
 
```bash
cd frontend/task-manager-frontend
npm start
```
 
Aplicação disponível em: `http://localhost:4200`
 
---

## Autor
Gabriel Conceição
