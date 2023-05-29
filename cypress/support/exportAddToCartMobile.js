import configs from "../support/configs"

export const AddToCartMobile = () => {
    cy.get(configs.mobileMenu.selector)
        .click()
    cy.get(configs.appShop.selector)
        .click()
    cy.get(configs.appGolf.selector)
        .click()
    cy.get(configs.MLM.selector)
        .contains('Mobile Launch Monitor (MLM)')
        .click({ force: true })
    cy.get(configs.appAddToCart.selector)
        .click()

}