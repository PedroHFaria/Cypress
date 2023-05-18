import 'cypress-xpath';

Cypress.Commands.add('Adicionar_Item', () => {
    cy.visit(Cypress.env('baseUrl')) // Navegando para a minha URL da maganize luiza definida no meu cypress.env.json

    cy.get('#input-search').type(Cypress.env('product')) // Preenchendo o campo Produto com o que foi definido do meu cypress.env.json
    cy.get('[data-testid="search-submit"]').click() //Clicando na Busca
    
    cy.contains('Whisky Johnnie Walker Double Black Label 12 Anos 1 Litro').should('be.visible') // Verificando se meu produto está disponpivel na Lista
    cy.contains('Whisky Johnnie Walker Double Black Label 12 Anos 1 Litro').first().click(); //Selecionando o produto

    
    cy.contains('h1', 'Whisky Johnnie Walker Double Black Label 12 Anos 1 Litro')
        .should('be.visible'); //Validando o nome do produto dentro da tela de compra
     
    cy.get('[data-testid="bagButton"]').first().click()
    
});

Cypress.Commands.add('Adicionar_Item_Erro', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.get('#input-search').type('Item que não existe')
    cy.get('[data-testid="search-submit"]').click()

});