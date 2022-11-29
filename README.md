# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Cypress
You can learn more about Cypress in the official [link](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn)

Cypress can be used to run any type of tests such as
- Unit Testing
- Component Testing
- E2e Testing
- Integration Testing

For the assignement cypress is used for both component and e2e testing

All *.cy.tsx files under the /src/components/** folder are spec files for component testing.

For the e2e testing files are located under ./cypress/e2e/ folder.

We can run cypress tests in two modes:
- Headless
- Headed (Interactive)

For each of these cases the React app has to be up and running

Let's see the two scripts below

### `npm run cypress:headless`

Headless run of cypress will basically use Electron to run **only** the e2e tests.

With the **run** command you won't be able to see somehow the runner doing the commands defined in the tests.

Running cypress with **run** command will produce **videos** and **reports** where you can find them at **cypress/** dir.

Let's see some screenshots of running e2e tests with cypress in headless mode

<img width="499" alt="Headless_1" src="https://user-images.githubusercontent.com/48323010/204531580-0ea90b63-47f8-47b2-80c3-2abbb9a6027d.png">
<img width="528" alt="Headless_2" src="https://user-images.githubusercontent.com/48323010/204531596-a18037ba-bbba-4351-be37-c406d765f5e4.png">
<img width="492" alt="Headless_3" src="https://user-images.githubusercontent.com/48323010/204531606-0300c0e2-427e-4b04-ad67-75b79332b7bb.png">

### `npm run cypress:interactive`
Running cypress interactively with **open** command, the cypress application will pop up in your machine and you will be able to choose if you want to do component testing or e2e testing

<img width="951" alt="Interactive_1" src="https://user-images.githubusercontent.com/48323010/204531746-7e2ef4d7-7aa5-4eb7-a645-bbdf24d106fd.png">

Then you will need to choose browser (Chrome preferred)

<img width="948" alt="Interactive_2" src="https://user-images.githubusercontent.com/48323010/204531752-71cd8fa9-90e9-4ad7-9061-bc7a39715513.png">


If you chose to do component testing in chrome then you will see this view, whereas you can choose any of the .cy.tsx files and do some component testing

<img width="960" alt="Interactive_3" src="https://user-images.githubusercontent.com/48323010/204531754-970adcb2-8dc4-4f3b-8e0b-22fd9a246b29.png">

<img width="955" alt="Interactive_4" src="https://user-images.githubusercontent.com/48323010/204531756-55f351f9-a2a4-4376-9cff-c4e2c3c40077.png">

If you chose to do e2e testing in chrome then you will see this view, whereas you can choose either of the two e2e files related to the two screens of the app.

<img width="959" alt="Interactive_5" src="https://user-images.githubusercontent.com/48323010/204531760-f03b802d-a1b4-4fcc-9e6c-8234c2dea306.png">

<img width="957" alt="Interactive_6" src="https://user-images.githubusercontent.com/48323010/204531763-bc2fe168-8ee9-408a-b80b-0d6dfd1f61f0.png">





The interactive run of cypress will not produce any reports or video recordings.

