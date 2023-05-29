import configs from "./configs";

export const CartItemControl = () => {
    cy.get(configs.cartLink.selector)
        .click();
    cy.get(configs.cartRemove.selector)
        .click();
}