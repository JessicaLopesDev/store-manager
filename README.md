# Talker Manager

## :page_with_curl: Sobre

O projeto Talker Manager consolida a utilização de Node.js e Express.js juntamente com as ferramentas Docker e MySQL para a criação de uma API RESTful com CRUD completo. Foi criada uma API CRUD para cadastro de pessoas palestrantes, em que é possível ler, cadastrar, editar e deletar informações do banco de dados.

Este projeto utiliza o módulo fs do Node.js para visualização e manipulação do banco de dados, permitindo o gerenciamento das informações das pessoas palestrantes de forma dinâmica e eficiente. Para me desafiar e me preparar para os próximos projetos, também fiz a conexão com o banco de dados relacional MySQL, fazendo uso da biblioteca mysql/promise.

## :woman_technologist: Habilidades desenvolvidas

- Node.js
- Express.js
- Docker
- MySQL
- Construção de uma API CRUD
- Arquitetura de Software seguindo o modelo MSC
- Testes unitários com: Mocha, Chai e Sinon

## 🛠️ Ferramentas Utilizadas

- Docker
- Node.js
- Express.js
- MySQL

## ⚙️ Como Executar

> :warning: &nbsp; _Para executar este projeto é necessário ter o Docker instalado_

<details>
  <summary> Como iniciar </summary>
  <br>

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:JessicaLopesDev/project-store-manager.git
```

2. Entre na pasta raíz do projeto e instale todas as dependências

```
npm install

3. É necessario executar o comando abaixo no diretório raiz do projeto para rodar o projeto.

```

docker-compose up -d

```

4. Para visualização da interface da API podem ser utilizados o Thunder Client, Postman ou Insomnia. O servidor será inicializado juntamente com a orquestração do docker.

5. Use os seguintes scripts, para testar o projeto, no terminal em que o container foi orquestrado.


```

npm run test:mocha

```

```

npm run test:coverage

```
</details>

```
