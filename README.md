<h1 align="center"> FeedGet </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>

![feedget_web](https://user-images.githubusercontent.com/72236316/169340691-8998633f-6e28-4d48-a8f4-ff41eccdfd97.png)

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

 O Feedget é um app que tem a finalidade de deixar o usuário analisar a pagina que esta navegando e contribuir deixando seu feedback, 
seja reportando um problema encontrado, tendo uma nova ideia de implementação ou outro motivo, conseguindo tirar um print da tela instantaneamente e escrevendo sobre.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/ANExUtpFkRcx3Orh6u0aV0/Feedback-Widget-(Community)?node-id=100%3A2114). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## 🚀 Como executar
- Você pode testar no link que esta no ar pela vercel:
https://nlw-return-feedget-web-murex.vercel.app/  <br><br> ou no local:

- Clone o repositório
- Entre na pasta clonada e execute o comando pelo terminal `npm install` ou `yarn` para instalar as dependências do projeto.
- Acesse `server/prisma/schema.prisma` e altere dentro de "datasource db" o provider = "postgresql" para provider = "sqlite" e salve
- Inicie o projeto pelo terminal entrando na pasta `/web` e executando o comando `npm run dev`
- Inicie o servidor pelo terminal entrando na pasta `/server` e executando o comando `npm run dev`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.
