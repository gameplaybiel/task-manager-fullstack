# Task Manager — Front-end

Interface web desenvolvida em **Angular 17 + Angular Material** para consumo da API de gerenciamento de tarefas, desenvolvida como parte do desafio técnico do Bootcamp Protagonize Tech Avanade.

---

## 🚀 Tecnologias

- [Angular 17](https://angular.io/)
- [Angular Material UI](https://material.angular.io/)
- TypeScript
- HTML5 / CSS3

---

## ✅ Funcionalidades

- Listagem de todas as tarefas
- Criação de nova tarefa
- Edição de tarefa existente
- Exclusão de tarefa
- Exibição de status: **Pendente** / **Concluída**

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) v9 ou superior
- Angular CLI: `npm install -g @angular/cli`
- API do back-end rodando localmente (veja instruções no README raiz)

---

## 🔧 Configuração

Por padrão, a aplicação aponta para a API em:

```
http://localhost:5000
```

Se necessário, altere a URL base no arquivo:

```
src/environments/environment.ts
```

---

## ▶️ Como rodar

```bash
# Acesse a pasta do front-end
cd frontend/task-manager-frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 📁 Estrutura de pastas

```
src/
├── app/
│   ├── components/     # Componentes da interface
│   ├── services/       # Serviços de comunicação com a API
│   ├── models/         # Interfaces e tipos TypeScript
│   └── app.module.ts
├── environments/       # Configurações de ambiente
└── index.html
```

---

## 🖼️ Demonstração

![Demonstração do Front-end](../../img/demonstracao-Front.png)

---

## Autor

**Gabriel Conceição**  
Desafio Técnico — Bootcamp Protagonize Tech Avanade
