##Be Api commerce para processo seletivo<br/>
<br/>

#Rotas<br/><br/>
prefixo: localhost:3333/api <br/><br/>

- User<br/>
  Criação  - /user (POST) -> body :{email, password}<br/>
  Login    - /login (POST) -> body :{email, password}<br/>
<br/><br/>
- Client<br/>
  
  Criação  - /clients (POST)  -> Cria um cliente no banco de dados. ( nome e cpf )<br/>
  Mostrar por id (show) - /clients/:id (GET) -> Mostra os dados de um cliente com seus endereços e compras realizadas.<br/>
  Mostrar todos (all) - /clients (GET)  -> Mostra todos clientes cadastrados <br/>
  Deleção (destroy) - /clients/:id (POST)  -> Deleta o cliente do banco junto de suas vendas.<br/>
  Atualização (update) - /clients/:id (PATCH)  -> Atualiza dados do cliente.<br/>

  <br/><br/>
- Product<br/>

  Criação<br/>
  Mostrar por id (show) - /products/:id (GET)  -> Mostra um produto com suas informações.<br/>
  Mostrar todos (all) - /products (GET)  -> mostra todos os produtos, com exceção dos deletados logicamente.<br/>
  SoftDelete (softDelete) - /product/:id (PUT)  -> Deleção lógica. Atualiza a flag isDeleted para true. Após isso, o produto não será mais mostrado ao buscar por todos os produtos<br/>
  Atualização (update) - /product/:id (PATC)  -> atualiza as informações do produto<br/>
<br/><br/>
- Sales<br/>
  
  Criação - /clients/sale (POST)  -> Cria um registro de venda de 1 produto para um cliente, junto da sua quantidade e preço total.<br/>
