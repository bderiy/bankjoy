# Canada Bank API test framework demo implementation.

## Overview

Hello Bankjoy team and welcome to review this project.  
The purpose of this project is to demonstate my ability to design and implement an efficient framework for API testing, and show my skills in designing modular and adaptable code for different event test scenarios. Although the number of test cases are limited to one API and it is hard to show a scalabily and adaptability, I did try to implement and introduce a few concepts like a new Command with variable number of additioanl parameters, functions for counting avarage mumber and code generator. With UI test implementation, there would be more option to show modular code implementation, such as Page Object Model.

## Verifying test results and challenges with obtaining persistent data.

Testing the "recent" endpoint poses challenges due to the dynamic nature of exchange rates, which fluctuate daily.  These fluctuations affect the average values used in assertions against expected data. To address this, I employ a regular expression (Regex) designed to match values within the range of 0.690 to 0.709. After reviewing daily exchange rates over the past 10 weeks, I observed that they consistently fall within this range. Therefore, this Regex can be reliably used for future validations, with adjustments considered only if there are significant changes in the CAD/USD exchange rate over time.

## Prerequisites

The software and tools required to run the tests, including specific versions if necessary(specified in package.json file).

- **Node.js**
- **npm** or **yarn**
- **Cypress**

## Installation

How-to set up the project locally.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bderiy/bankjoy.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd bankjoy
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

   or
   ```bash
   yarn install
   ```


## Project Structure

Organization of the project's directories and files.

- `cypress/`: Contains all Cypress-related files.
  - `fixtures/`: Optional JSON data for mocking.
  - `e2e/`: Test files.
  - `support/`: Custom commands and configurations.
- `cypress.config.js`: Cypress configuration file.

## Running Tests

To execute the tests in different modes.

- **Open Cypress Test Runner:** Launches the interactive GUI.
  
```bash
  npx cypress open
  ```

- **Run tests headlessly:** Executes tests without the GUI.
  
```bash
  npx cypress run
  ```


## Continuous Integration (CI)

Not available. 

## Custom Commands

Custom commands are defined in `cypress/support/commands.js`. There was one Command added:


```javascript
Cypress.Commands.add('apiObservationsBySeries', (seriesNames, weeks, ...rest) => {
  // Command implementation
});
```

To use this command in a test:


```javascript
describe('Test App', () => {
  it('Do something', () => {
   cy.apiObservationsBySeries('CADUSD', 10). ...
    // Additional test steps
  });
});
```

For more on custom commands, see the [Cypress Custom Commands Guide](https://docs.cypress.io/api/cypress-api/custom-commands).

## Reporting

There is 3rd party HTML reporting was integrated - cypress-mochawesome-reporter.

1. **Location:**
    - `cypress/`:
        - `reports/`:
2. **Path to the index.html file:**
   - cypress/reports/html/index.html

- [cypress-mochawesome-reporter npm](https://www.npmjs.com/package/cypress-mochawesome-reporter).



## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress GitHub Repository](https://github.com/cypress-io/cypress)