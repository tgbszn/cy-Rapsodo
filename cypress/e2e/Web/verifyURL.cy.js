/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";

browserify();

describe('Case-1: Verify the URL from Web', { testIsolation: false }, function () {
    testWrapper({ itTitle: "The user goes to the 'https://rapsodo.com' address and verifies that they went to this address.", viewportGroup: "web" }, () => {

        cy.url().should("eq", "https://rapsodo.com/");

    })
})