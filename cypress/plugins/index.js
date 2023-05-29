export const browserify = () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    //It was created to avoid Chromium bugs. It will be run on every page.
}