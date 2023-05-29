import configs from "../support/configs"

let initialPrice, cartPrice;

export const priceControlMobile = () => {
    cy.get(configs.mobileMenu.selector)
        .click()
    cy.get(configs.appShop.selector)
        .click()
    cy.get(configs.appGolf.selector)
        .click()
    cy.get(configs.MLM.selector)
        .contains('Mobile Launch Monitor (MLM)')
        .click({ force: true })
    cy.get(configs.cartMainContent.selector)
        .parent()
        .within(() => {
            cy.get(configs.initialPrice.selector)
                .invoke('text')
                .as('initialPrice')
                .then((text) => {
                    initialPrice = text.trim();
                });
        });

    cy.get(configs.stickyAddToBag.selector)
        .contains('ADD TO CART')
        .click();

    cy.get(configs.cartItem.selector)
        .contains('$299.99')
        .invoke('text')
        .as('cartPrice')
        .then((text) => {
            cartPrice = text.trim(); 
        });
}