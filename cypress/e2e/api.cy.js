describe('template spec', () => {
  it('Observations by series - recent weeks', () => {
    cy.apiObservationsBySeries('CADUSD', 10).then((response) => {
      cy.log(response);
    })
  })
})