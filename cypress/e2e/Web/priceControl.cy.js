/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";
import { priceControlWeb } from "../../support/exportPriceControlWeb";
import { CartItemControl } from "../../support/exportCartItemControl";

browserify();

describe("Case-4: The user clicks on the 'ADD TO CHART' button", { testIsolation: false }, function () {
    testWrapper({ itTitle: "b. Verify the price of the Mobile Launch Monitor (MLM) is the same with Mobile Launch Monitor (MLM) screen ", viewportGroup: "web" }, () => {

        priceControlWeb();
        CartItemControl();

    })
})