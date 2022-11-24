"use strict";
const user = {
    id: 123,
    name: "Cola",
    seyHello: function () {
        this.name;
    },
};
// !when we create separate function we need explicity assign on what 'this' pointing
function myClickHandler(event, b) {
    this.disabled = true;
    // at this case we have "HTMLButtonElement",
    // witch show us all available methods on HTML button element, after typing '.'
}
