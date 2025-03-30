import { calculateAverage } from '../libs/count'

describe('template spec', () => {
  it('Observations by series - recent weeks', () => {
    cy.apiObservationsBySeries('CADUSD', 10).then((response) => {
      cy.log(response);
      let avarageNumber = calculateAverage(response.body);
      expect(response.status).to.eq(200);
      expect(response.duration).to.below(50);
      expect(avarageNumber).to.match(/^0\.69\d*$/ || /^0\.70\d*$/);
    })
  })
})