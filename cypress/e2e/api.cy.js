import { calculateAverage } from '../libs/count';
import { generateString } from '../libs/string_generator';

describe('template spec', () => {
  //Positive test - request existing pair and 10 weeks recent period
  it('Observations by series - recent weeks', () => {
    cy.apiObservationsBySeries('CADUSD', 10).then((response) => {
      cy.log(response);
      let avarageNumber = calculateAverage(response.body);
      expect(response.status).to.eq(200);
      //expect(response.duration).to.below(100);
      expect(avarageNumber).to.match(/^0\.69\d*$/ || /^0\.70\d*$/);
    })
  })

  //Negative test for test cese:
  //- You can not mix start_date or end_date with any of recent
  it.skip('Observations by series - recent weeks + startDay and endDay', () => {
    cy.apiObservationsBySeries('CADUSD', 10, '2025-01-01', '2025-01-05').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Bad recent observations request parameters, you can not mix start_date or end_date with any of recent, recent_weeks, recent_months, recent_years");
    })
  })

  //Negative test for test cese:
  //- Series not found.
  it('Observations by series - recent weeks + startDay and endDay', () => {
    //generaring 6 letters series
    const randomStr = generateString();
    cy.apiObservationsBySeries(randomStr, 10).then((response) => {
      cy.log(response.body.message);
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq(`Series FX${randomStr} not found.`);
    })
  })
})