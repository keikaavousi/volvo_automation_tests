# Volvo "A million more" Campaign Automation Test

Automation Tests for the [A million more](https://www.volvocars.com/intl/v/car-safety/a-million-more) campaign of Volvo company. The test result can be found in the [Tesult](https://www.tesults.com/results/rsp/view/results/project/a6ad05fa-678c-4981-add5-9a5860093a5d) and csv of the report can be found [here](./result/volvo-campaign%20Default%20Fri%2017%20Mar%202_17_45PM.csv)

## 🔆​ Key Features

-   🧑‍💻​ Written with Webdriver.IO and Mocha.js framework.
-   🔎​​ Well documented for each part
-   🧪 Parallel execution of tests in Chrome and Firefox
-   🛠️ Sample visual regression testing for full-page compare
-   📦​ Tesult for reporting test results

## 👓​ Prerequisites

It requires Node.js +16 to run.

## 🏃🏻‍♂️​ Getting Started

To install dependencies, run the following command:

```bash
npm install
```

## 🧪 Test

To run the e2e Test with Webdriver.IO:

```bash
npm run wdio
```

## 🔮​ Future works

If I wanted to extend this project and have more time, I would do something like this:

-   Write more e2e tests for every part of the landing page
-   Try to fix the 403 error on the loading script of the close button click by handling user agents and cookies
-   Write A11y (Accessibility) tests
-   Write responsive tests for different devices and viewports
