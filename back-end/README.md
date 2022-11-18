<p align="center">
  <h1 align="center">
    NG.CASH Challenge back-end
  </h1>
</p>

## 🚀 API:

```yml
POST /signup
    - Rota para cadastro de usuários
    - headers: {}
    - body: {
        "userName": String - min 3 caracteres
        "password": "Exemplosenha2" - min 8 caracteres contendo no mínimo um número uma letra maiúscula e uma letra minúscula
        "confirmPassword": "Exemplosenha2" - Repetir o password
    }
```

```yml
POST /signin
    - Rota para realização de login
    - headers: {}
    - body: {
        "userName": String - min 3 caracteres
        "password": "Exemplosenha2" - min 8 caracteres contendo no mínimo um número uma letra maiúscula e uma letra minúscula
    }
```

```yml
GET /balance (autenticada)
    - Rota que retorna o balanço do usuário
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
```

```yml
POST /transaction (authenticated)
    - Rota que realiza a transação
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {
        "userName": String nome do usuário alvo - min 3 caracteres
        "value": valor a ser tranferido tipo float
    }
```