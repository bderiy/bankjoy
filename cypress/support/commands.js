// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const { method } = require("cypress/types/bluebird");

//This command performs API GET requests to Observations by series endpoint
//It takes 2 mandatory parameters 'seriesNames' and 'weeks(number)', and it takes additional parameters, first two are assigned to 
// variables startDate and endDate respectfuly.
Cypress.Commands.add('apiObservationsBySeries', (seriesNames, weeks, ...rest) => {
    let startDate = rest.length > 0 ? rest[0] : 0;
    let endDate = rest.length > 0 ? rest[1] : 0;
    console.log(endDate)
    Cypress.log({ displayName: 'API Observations By Series' })
    //checking if extra parameters were sent
    if (startDate != 0 && endDate != 0) {
        cy.api({
            method: 'GET',
            url: `/valet/observations/FX${seriesNames}/json?recent_weeks=${weeks}&start_date=${startDate}&end_date=${endDate}`,
            failOnStatusCode: false,
        })
    } else {
        cy.api({
            method: 'GET',
            url: `/valet/observations/FX${seriesNames}/json?recent_weeks=${weeks}`,
            failOnStatusCode: false,
        })
    }
});