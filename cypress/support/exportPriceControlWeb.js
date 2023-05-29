import configs from "../support/configs"

let initialPrice, cartPrice;

export const priceControlWeb = () => {
    cy.get(configs.headerMenu.selector)
        .contains('Shop')
        .trigger('mouseover');

    cy.get(configs.shopDropdown.selector)
        .contains('Golf')
        .click();

    cy.get(configs.MLM.selector)
        .contains('Mobile Launch Monitor (MLM)')
        .parent()
        .within(() => {
            cy.get(configs.initialPrice.webselector)
                .invoke('text')
                .as('initialPrice')
                .then((text) => {
                    initialPrice = text.trim();
                });
        });

    cy.get(configs.MLM.selector)
        .contains('Mobile Launch Monitor (MLM)')
        .click();

    cy.get(configs.webAddToCart.selector)
        .contains('ADD TO CART')
        .click();

    cy.get(configs.webCartItem.selector)
        .contains('$299.99')
        .invoke('text')
        .as('cartPrice')
        .then((text) => {
            cartPrice = text.trim();

            it('Compare prices', () => {
                cy.get('@initialPrice').then((initialPrice) => {
                    expect(initialPrice).to.eq(cartPrice);
                });
            });
        });
}
