describe('Adicionando item ao carrinho com sucesso', () => {
    it('Selecionar Item', () => {
        cy.Adicionar_Item()

        cy.contains('Sacola').should('exist')

    });
});

describe('Adicionando item ao carrinho com erro', () => {
    it('Adicionar Item com erro', () => {
        cy.Adicionar_Item_Erro()

        cy.contains('Item que não existe').should('be.visible')

    });
});
