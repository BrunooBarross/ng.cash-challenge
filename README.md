<p align="center">
  <h1 align="center">
    NG.CASH Challenge Bruno Barros
  </h1>
</p>

## 💻 Tecnologias Utilizadas

- Node.js
- JavaScript
- TypeScript
- PostgreSQL
- ReactJS
- Docker

---

## 👨🏻‍💻 Instalação

```bash
$ git clone https://github.com/BrunooBarross/ng.cash-challenge.git

$ cd ng.cash-challenge/

$ docker-compose up --build
```

 - Accesse em seu navegador o link localhost:80 ou 127.0.0.1:80
 
 ## 💁🏻‍♂️ Outra forma de instalar - sem a utilização do Docker

```bash

$ git clone https://github.com/BrunooBarross/ng.cash-challenge.git
$ cd ng.cash-challenge/back-end/

```

  - Modifique o .env do diretório back-end alterando o DATABASE_URL para a url do seu PostgreSQL
  - Exemplo: postgres://UsuarioDoPostgre:SenhaDoPostgre@Hostname:5432/NomedoDataBase
 

 ```bash
$ npm i

$ npm run prisma:all ou npx prisma migrate dev

$ npm run dev

```
 - Acesse a pasta front-end/ por outro terminal, sem parar a aplicação do back-end
 - Entre no arquivo .env e modifique o REACT_APP_API_BASE_URL para  http://localhost:4000 ou http://127.0.0.1:4000
 
 
  ```bash
$ npm i

$ npm start
```
 
  - Abra seu navegador de internet e acesse localhost:3000