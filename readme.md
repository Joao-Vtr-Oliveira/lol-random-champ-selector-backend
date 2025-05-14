# Lol random champ selector (backend).

<div align=center>
  <p style='font-size: 25px; text-decoration: underline; font-weight: bold'>Ferramentas:</p>
  <a href="https://github.com/Joao-Vtr-Oliveira/todo-list-login">
    <img src="https://skillicons.dev/icons?i=nodejs,ts,mongodb,postman,docker" />
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


> #### O projeto também há diferentes imagens docker (mongoDB, Mongo-express e node). Além disso, também há o docker-compose, que junta todas as imagens e também puxa a imagem do front-end. Já iniciando ambos os projetos.
---

- Você pode ver a implementação front-end desse projeto [Aqui.](https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-frontend)

---

# Exemplo: ![2024-04-10 15-14-20](https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-backend/assets/114768964/a826e59e-37e3-4ce1-b859-f084b6e95738)


### Ele foi feito com Node.js e Express utilizando TypeScript em sua base, e foi utilizado MongoDB como Banco de Dados e o mongoose como ORM.

---

## Como utilizar
- **Tutorial para usar**
    1. Entre no site [https://labs.play-with-docker.com/](https://labs.play-with-docker.com/)
    2. Logue ou se cadastre na sua conta do docker
    3. Crie uma nova instância
    4. Digite: `git clone https://github.com/Joao-Vtr-Oliveira/lol-random-champ-selector-backend`  (Cole com **shift + ctrl + V**). Confirme com **`enter`**
    5. Digite: `cd lol-random-champ-selector-backend` e confirme (Pode-se usar o tab para completar). E clique `enter`
    6. Digite: `touch .env` e clique `enter`
    7. Digite: `vim .env` e clique `enter`
    
    1. Clique “`i`” depois digite NEXT_PUBLIC_URL=(Monte a URL e coloque aqui. Siga os passos a baixo para fazer) `Sem os parênteses`
        1. Você vai Copiar o código que está em SSH (Apenas a URL, sem o `SSH`)
        2. Digite: `http://URL COPIADA` ...
        3. Apague o @ e coloque  “`-3000.`"
        4. **O LINK NÃO  DEVE TER A BARRA FINAL (/)**
    
    ---
    
    1. Após isso, você vai clicar `esc`
    2. Clicar 2 pontos (:), digitar “`wq`" e clique `enter`
    3. Depois digite: `docker compose up`
    4. Vai esperar até tudo carregar (Demora um pouco)
    5. Quando tudo tiver carregado, você vai clicar em `8080` (**No canto superior da tela**), caso não tenha, clique em `open port` e digite 8080.
    6. A princípio **NÃO** vai carregar, voltando pra página do PWD, quando aparecer `REACT   | V compiled` é sinal que está pronto
    7. Volte para a página aberta e dê **F5**
    8. Aproveite!