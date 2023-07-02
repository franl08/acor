# Acorthemis

## Introdução

## Backend

### Dataset

Depois de analisar os vários datasets disponibilizados pelo docente, conclui-se quais eram os campos que valiam a pena estar no dataset final e quais não.

### Taxonomia de termos


### Coleções 


### Tratamento de pedidos


- GETS
    - `/acordaos?page=${page}&orderBy=${campo};(desc|asc)&keywords=${keywords}&(filtro=${filtro})+`

        - Devolve a página `page` da lista dos acórdãos ordenada por `campo` (definido pelo utilizador), com `keywords`, que procura em campos específicos dos acórdãos o termo ou frase inserida. Para além disso também é possível filtrar pelos campos dos acordãos.
    - `/acordaos/${id}`

        - Devolve o acórdão com o respetivo `id`
    - `/reviews?page=${page}`

        - Devolve a página `page` da lista de reviews. 
    - `/reviews/${id}`

        - Devolve a review com o respetivo `id`
    - `/users/${username}`

       - Devolve a página do utilizador com `username`
    - `/lists?list=${listId}`

        - Devolve a lista com o id `listId`
    - `/lists?user=${username}`

        - Devolve a lista de listas de acórdãos que o utilizador com `username`
        
- POSTS
    - `/lists`
    - `/acordaos`
    - `/reviews`
    - `/users`
    - `/auth`
    - `/reviews/accept/${reviewId}`

        - Aceita uma `review`, ou seja, cria/altera o acórdão ao qual a `review` se refere.

- PUT [UPDATE]
    - `/lists?user=${username}&list=${listName}`

        - 
    - `/acordaos/{acordaoID}`

        - Edita o acórdão
    - `/users/${username}`


        - Edita o utilizador

- DELETE
    - `/lists?list=${listId}&acordao=${acordaoId}`;

        - Elimina um acórdão da lista selecionada
    - `/lists?list=${listId}`;

        - Elimina a lista selecionada
    - `/reviews/${id}`;
    - `/users/${username}`.


## Frontend

Para o Frontend, escolheu-se utilizar a framework para criar Web Apps [SvelteKit](https://kit.svelte.dev/). Esta é baseada em Svelte, uma framework de Javascript que difere de outras por ser um compilador e não apenas uma runtime library. O código é compilado durante o build time em vez de executar do lado do cliente. Desta forma, menos código é enviado para o lado do cliente e maior é a performace.

Foram criados vários módulos onde cada possui um ficheiro denominado por "+page.svelte" contendo o código para a criação das páginas. O seguintes módulos e sub-módulos foram criados para apresentar as diversas funcionalidades:

- "about": página que apresenta a secção "Sobre nós" que possui informações sobre o contexto do trabalho e sobre do grupo.
- "acordaos":
    - [id]: página que apresenta todos os campos de um acordão com o identificador 'id'.
    - add: página que permite adicionar um acordão apresentando os vários campos do mesmo.
    - edit: página que permite editar os vários campos de um acordão.
- "login": página que apresenta o título do site bem como a barra de pesquisas e o botão de login. O login deve ser realizado através da introdução de credenciais. Caso o utilizador tente pesquisar sem estar autenticado, um "Modal" de erro é apresentado, mencionando que se deve autenticar primeiro. Permite redirecionar para a página de registo de um utilizador novo.
- "logout": contém um script auxiliar para a o logout de um utilizador.
- "register": página que permite registar um utilizador novo apresentando vários campos onde é possível introduzir as novas informações e submeter as mesmas.
- "reviews": página referentes à revisão de acordãos. Apresenta uma listagem de vários acordãos de forma paginada. É possível interagir com a mesma, ordenando e filtrando de acordo com diversos parâmetros. É possível ainda pesquisar e visualizar acordãos específicos.
    - [id]: página que apresenta todos os campos de um acordão com o identificador 'id' em modo de revisão. Semelhante à página de um acordão, com a funcionalidade acrescida de "Aceitar" ou "Rejeitar" o mesmo.
- "user"
    - [id]: página que apresenta todas as informações relativas ao utilizador com o identificador 'id'. Permite "Apagar", "Promover" e "Despromover" o utilizador.
    - edit: página que apresenta todas as informações relativas ao utilizador com o identificador 'id' e atualizar o valor de cada campo.
    - lists: página que apresenta as listas de acordãos existentes.
        - [id]: página que permite visualizar as informações relativas à lista com o identificador 'id'. Permite "Ver" e "Remover" acordãos na lista em causa.
        - add: página que permite criar uma lista de acordãos. 
    - search: página que permite pesquisar utilizadores na base de dados pelo seu nome.
- "error": página geral de erro.
- "layout"

## Conclusão
