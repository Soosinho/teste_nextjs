describe('Navegação', () => {
  it('deve navegar para a página inicial', () => {
    cy.visit('/')
  })
})

describe('Buscar título', () => {
  it('deve encontrar o título', () => {
    cy.visit('/')

    cy.contains('Plataforma Oceano')
  })
})

describe('Navegar para /users', () => {
  it('deve navegar para listagem de usuários', () => {
    cy.visit('/')

    cy.contains('Listar Usuários').click()

    cy.url().should('include', '/users')
  })
})

describe('Buscar nome', () => {
  it('deve buscar o nome Ana na tabela', () => {
    cy.visit('/users')

    cy.get('input').type('Ana')

    cy.contains('Ana')
  })
})

describe('Buscar nome', () => {
  it('deve buscar o nome Pedro na tabela', () => {
    cy.visit('/users')

    cy.get('input').type('Pedro')

    cy.contains('Pedro')
  })
})