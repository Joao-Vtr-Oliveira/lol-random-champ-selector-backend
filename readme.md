# Lol random champ selector (backend)

<div align=center>
  <p style='font-size: 25px; text-decoration: underline; font-weight: bold'>Ferramentas:</p>
  <a href="https://github.com/Joao-Vtr-Oliveira/todo-list-login">
    <img src="https://skillicons.dev/icons?i=nodejs,ts,mongodb,postman" />
  </a>
</div>

## Esse projeto é uma API que se comunica com um banco de dados MongoDB que contém todos os personagens do jogo `League of legends`.

### Todos os personagens contém informações como: Rota, tipo dano/jogo, se é um campeão ranged ou não.

### E há uma rota que faz uma requisição a esse banco de dados, enviando informações (Ou não) da rota, tipo de dano e se ele é ranged, e é retornado um campeão aleatório que bata com os requisitos.

### Além disso, há outras rotas, como:

- Uma rota que adiciona um novo campeão
- Uma rota que edita um campeão existente
- Uma rota que retorna todos os campeões do banco de dados
- Uma rota que remove um campeão do banco de dados

#### Todos os campeões e suas predefinições estão em `src/utils/champions.ts` caso você queira criar seu próprio banco de dados e utilizar o projeto. Basta utilizar a rota que inicializa e adiciona todos os campeões no banco de dados.
---


# Exemplo:
![2024-04-10 15-14-20](https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-backend/assets/114768964/30d2ffdb-b055-4104-b601-e2ef4d8a16f6)


### Ele foi feito com Node.js e Express utilizando TypeScript em sua base, e foi utilizado MongoDB como Banco de Dados e o mongoose como ORM.

---