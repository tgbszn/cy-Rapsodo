import configs from "../support/configs"

export const pageTitleControlWeb = () => {
    cy.get(configs.HeaderMenu.selector)
        .contains('Shop')
        .trigger('mouseover');

    cy.get(configs.shopDropdown.selector)
        .contains('Golf')
        .click();
    cy.get(configs.MLM.selector)
        .eq(1)
        .click({ force: true })
    cy.wait(2000)
    cy.title()
        .should('eq', 'Rapsodo® Mobile Launch Monitor | Golf MLM | Buy Online @ Rapsodo® Official Site');
}