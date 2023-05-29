import configs from "../support/configs"

export const pageTitleControlMobile = () => {
    cy.get(configs.mobileMenu.selector)
        .click()
    cy.get(configs.appShop.selector)
        .click()
    cy.get(configs.appGolf.selector)
        .click()
    cy.get(configs.MLM.selector)
        .contains('Mobile Launch Monitor (MLM)')
        .click({ force: true })
    cy.title()
        .should('eq', 'Rapsodo® Mobile Launch Monitor | Golf MLM | Buy Online @ Rapsodo® Official Site');
}