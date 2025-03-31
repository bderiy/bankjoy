import { calculateAverage } from '../libs/count';
import { generateString } from '../libs/string_generator';

describe('template spec', () => {
  //Positive test - request existing pair and 10 weeks recent period
  it('Positive test - Observations by series - recent weeks', () => {
    cy.apiObservationsBySeries('CADUSD', 10).then((response) => {
      cy.log(response);
      let avarageNumber = calculateAverage(response.body);
      expect(response.status).to.eq(200);
      //expect(response.duration).to.below(100);
      expect(avarageNumber).to.match(/^0\.69[0-9]*|70[0-9]{0,1}$/);
    })
  })

  //Negative test for test cese:
  //- You can not mix start_date or end_date with any of recent
  it('Negative test - Observations by series - with start day/end day and by recent 10 weeks', () => {
    cy.apiObservationsBySeries('CADUSD', 10, '2025-01-01', '2025-01-05').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Bad recent observations request parameters, you can not mix start_date or end_date with any of recent, recent_weeks, recent_months, recent_years");
    })
  })

  //Negative test for test cese:
  //- Series not found.
  it('Negative test - Observations by series - not existing series', () => {
    //generaring 6 letters series
    const randomStr = generateString();
    cy.apiObservationsBySeries(randomStr, 10).then((response) => {
      cy.log(response.body.message);
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq(`Series FX${randomStr} not found.`);
    })
  })

  //Negative test for test cese:
  //- Bad recent observations request parameters, you cannot have a recent value less than one.
  it('Negative test - Observations by series - with weeks equals to zero', () => {
    //generaring 6 letters series
    const randomStr = generateString();
    cy.apiObservationsBySeries(randomStr, 0).then((response) => {
      cy.log(response.body.message);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq(`Bad recent observations request parameters, you cannot have a recent value less than one`);
    })
  })
})