# Live #001 - Entendendo a estrutura de tokens JWT criando a sua própria implementação

## JSON Web Token (JWT)

Documentação: [https://jwt.io/](https://jwt.io/)

### O que são ?

São tokens "autossuficientes" que servem para realizar troca de informações
de forma segura entre aplicações no formato JSON.

- **Self-contained:** os tokens carregam dentro de si todas as informações necessárias para valida-lo.
  ou seja, são autossuficientes.

- **Stateless:** não mantém estado no servidor, ou seja, não é necessário armazenar os tokens no servidor
  cada requisição é independente e com isso não é necessário armazenar os tokens no servidor, bancos de dados etc.

- **Multi-language:** podem ser utilizados em qualquer linguagem de programação, pois são baseados em JSON.

### Anatomia de um Token JWT

```JSON
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ
```

Um token JWT é composto por 3 partes, no token acima separamos as partes por `.`, temos então:

- **Header:** contém o tipo de token e o algoritmo de criptografia utilizado.

```JSON
  {
    "alg": "HS256",
    "typ": "JWT"
  }
```

- **Payload:** contém as informações que serão trafegadas no token.

```JSON
  {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
```

- **Signature:** contém a assinatura digital que será utilizada para validar o token.

```js
hash(`${base64UrlEncode(header)}.${base64UrlEncode(payload)}`, secret);
```

```JSON
  HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret
  )
```

O Header e o Payload são codificados em Base64Url, e a assinatura é gerada a partir da codificação
do Header e do Payload utilizando o algoritmo de criptografia especificado no Header.

- **Base64Url:** é uma variação do Base64 que utiliza os caracteres `-` e `_` ao invés de `+` e `/`.
- **HMACSHA256:** é um algoritmo de criptografia que utiliza uma chave secreta para gerar uma assinatura digital, significa "Hash-based Message Authentication Code" e utiliza o algoritmo SHA256.
- **SHA256:** é um algoritmo de criptografia que gera um hash de 256 bits, significa "Secure Hash Algorithm" e utiliza 256 bits.
- **Secret:** é uma chave secreta que será utilizada para gerar a assinatura digital do token pelo servidor.
- **Hash:** é um valor gerado a partir de um conjunto de dados, é uma função matemática que gera um valor único para cada conjunto de dados, ou seja é uma função pura.

### Como é valido a assinatura do token ?

O servidor possui uma chave secreta que é utilizada para gerar a assinatura digital do token, quando o servidor recebe um token ele utiliza a chave secreta para gerar uma nova assinatura digital e compara com a assinatura digital do token, se as assinaturas forem iguais o token é válido, caso contrário o token é inválido.

Basicamente teremos uma função que faz um split no token e pega o header e o payload, depois
gera uma nova assinatura digital utilizando a chave secreta e compara com a assinatura digital
do token, se as assinaturas forem iguais o token é válido, caso contrário o token é inválido.
