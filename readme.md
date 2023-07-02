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

## Conclusão