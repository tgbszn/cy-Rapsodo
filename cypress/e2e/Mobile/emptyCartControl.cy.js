/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";
import { EmptyCartControl } from "../../support/exportEmptyCartControl";

browserify();

describe('Case-2: The user clicks on the “Cart” icon at the top right area.', { testIsolation: false }, function () {
    testWrapper({ itTitle: "The user verifies that shopping cart empty at that moment.", viewportGroup: "app" }, () => {

        EmptyCartControl()

    })
})