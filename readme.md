# Aplicação para Login

Aplicação em Node.js e React.js atendendo aos requisitos descritos em [reuisitos.md](./requisitos.md)

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [React.js](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [vite](https://vitejs.dev/)

## Projeto

Trata-se de uma Prova de Conceito que implementa requisitos para teste de Desenvolvedor de App.

Para tanto o todas as rotas, lógica e serviços estão dentro do modulo `server.js`, podendo ser refatorado (juntamente novas features) em pastas e módulos Routers, Controllers, Services seprando assim as responsabilidades e estando de acordo com princípios SOLID.

A aplicação serve uma rota de verificação para a tela de login comparando com um array de usuários mockados o que representa a base de dados.

Acrescentei uma rota GET `http://localhost:4000/users` que lista todos os usuarios e uma rota POST `http://localhost:4000/create` para adicionar novos usuários por meio de uma requisição pelo Insominia ou Postman com a seguinte estrutura JSON no body, como no exemplo:

    {
        email: 'alexandrematis@gmail.com',
        password: '1234567890'
    }

## Como executar

- Clone o repositório
- Rode o comando `npm run dev` dentro da pasta backend para ter o servidor em `http://localhost:4000`
- Rode o comando `npm run dev` dentro da pasta frontend para ter aplicação disponível em `http://localhost:3000`

## Licença

Esse projeto está sob a licença MIT.

Feito por Alexandre Matis
