import configs from "../support/configs"

export const EmptyCartControl = () => {
    //You can go to the cart by clicking on the cart icon from the homepage. There is the selector of the basket icon in the configs.js
    cy.get(configs.cart.selector).click();
    //If the cart is empty, "Your cart is currently empty." text should be visible.
    cy.contains('Your cart is currently empty.').should('be.visible');
}