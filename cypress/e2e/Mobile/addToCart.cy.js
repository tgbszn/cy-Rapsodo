/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";
import { AddToCartMobile } from "../../support/exportAddToCartMobile";
import { CartItemControl } from "../../support/exportCartItemControl";


browserify();

describe("Case-4: The user clicks on the 'ADD TO CHART' button", { testIsolation: false }, function () {
    testWrapper({ itTitle: "a. Verifies that the user redirected to the chart screen.", viewportGroup: "app" }, () => {

        AddToCartMobile();
        cy.url()
        .should("eq", "https://rapsodo.com/cart")
        CartItemControl();

    })
})