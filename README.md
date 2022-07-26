# **Teste Frontend**

---

# **Projeto**

    O projeto foi criado para o processo seletivo de frontend da Plataforma Oceano. Desenvolvido em React, foi utilizado seu framework mais famoso, Next.js, juntamente com HTML e CSS para desenvolvimento web. O site é uma plataforma de listagem e edição de usuários, que não utiliza nenhum banco de dados.

---

# **Instalar e rodar**

    Após baixar ou clonar o projeto pelo github, utilizar os seguintes comandos no terminal:

##### Instalar as dependências:

```
npm install
```

#### Rodar o projeto:

```
npm run dev
```

E por fim, abrir o site em seu browser <http://localhost:3000>

---

# **Funcionalidades**

O site possui três telas:

- Página inicial

- Usuários

- Editar usuário

#### Página inicial

Na página inicial temos o título do projeto, junto com um botão <u>Listar Usuários</u> que leva para a próxima página.

#### Usuários

A página de usuários possui uma tabela com os dados de todos usuários, separados por **id**, **nome**, **telefone** e **idade**. A página também contém um filtro de busca, que busca usuários por nome, e cada linha da tabela possui um botão que leva para a próxima tela de edição do usuário.

#### Editar usuário

Aqui temos um pequeno card que mostra todos os dados do usuário, e um botão para aplicar as alterações feitas. Todos os campos são alteráveis.

#### Barra de navegação

O site também possui, na parte superior, uma barra de navegação, onde o usuário poderá facilmente navegar entre telas utilizando os dois botões.

---

# Complementos

    O projeto não tuiliza nenhum banco de dados, portanto todos os dados dos usuários foram criados por mim e estão armazenados no arquivo **data.json**.
