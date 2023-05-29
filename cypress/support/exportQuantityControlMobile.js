import configs from "../support/configs"


export const quantityControlMobile = () => {
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
    cy.get(configs.quantity.selector)
        .invoke("val")
        .then((initialQuantity) => {
            // Click on the '+' button to increase the quantity
            cy.log('value', initialQuantity);
            cy.get(configs.quantityPlus.selector)
                .click();


            cy.get(configs.quantity.selector)
                .invoke("val")
                .then((updatedQuantity) => {

                    cy.log('value', updatedQuantity);
                    const initialQuantityNumber = parseInt(initialQuantity, 10);
                    const updatedQuantityNumber = parseInt(updatedQuantity, 10);

                    expect(updatedQuantityNumber).to.eq(initialQuantityNumber + 1);

                    cy.reload() //When I change the Quantity, the subtotal does not change without refreshing the page.
                    cy.wait(3000)

                    cy.get(configs.unitPrice.selector)
                        .invoke('text')
                        .then((unitPriceText) => {
                            cy.log('unit price text', unitPriceText)
                            const unitPrice = parseFloat(unitPriceText.trim().replace('$', ''));
                            cy.log('unit price', unitPrice)

                            cy.get(configs.subTotal.selector)
                                .contains('$')
                                .invoke('text')
                                .then((totalPriceText) => {
                                    cy.log('total price text', totalPriceText)
                                    const totalPrice = parseFloat(totalPriceText.replace(/[^0-9.]/g, ''));
                                    cy.log('total price', totalPrice)

                                    const calculatedTotalPrice = unitPrice * updatedQuantity;

                                    cy.log('calculated total price', calculatedTotalPrice)

                                    expect(calculatedTotalPrice).to.equal(totalPrice);

                                })
                        });
                })
        })

}