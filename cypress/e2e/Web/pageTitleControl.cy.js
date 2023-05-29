/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";
import { pageTitleControlWeb } from "../../support/exportPageTitleControlForWeb";

browserify();

describe("Case-3: The user clicks on the 'Golf' button below the 'Shop' and chooses the 'Mobile Launch Monitor (MLM)' via 'View Production' button.", { testIsolation: false }, function () {
    testWrapper({ itTitle: "The user asserts / verifies that the page's title is 'Mobile Launch Monitor (MLM)'.", viewportGroup: "web" }, () => {

        pageTitleControlWeb()

    })
})