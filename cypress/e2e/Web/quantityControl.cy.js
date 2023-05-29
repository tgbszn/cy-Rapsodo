/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";
import { quantityControlWeb } from "../../support/exportQuantityControlWeb";
import { CartItemControl } from "../../support/exportCartItemControl";

browserify();

describe("Case-5: The user increases quantity ( quantity = 2 ) of product on the cart .", { testIsolation: false }, function () {
    testWrapper({ itTitle: "The user verifies that there are two items in their My Chart part and that it costs $xx.xxx.00.", viewportGroup: "web" }, () => {

        quantityControlWeb();
        CartItemControl();

    })
})