import configs from "../support/configs"

export const AddTheCartWeb = () => {
    cy.get(configs.headerMenu.selector)
        .contains('Shop')
        .trigger('mouseover');
    cy.get(configs.shopDropdown.selector)
        .contains('Golf')
        .click();
    cy.get(configs.MLM.selector)
        .contains('Mobile Launch Monitor (MLM)')
        .click({ force: true })
    cy.get(configs.webAddToCart.selector)
        .click()
}
