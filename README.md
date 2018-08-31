# Ehealth React Redux
[![generator-create-redux-app](https://img.shields.io/badge/built%20with-generator--create--redux--app-brightgreen.svg)](https://github.com/jonidelv/generator-create-redux-app)

This is a React-Redux boilerplate for developing web applications that interact with Innovation Lab's DHDR. 
Queries are made by submitting a health card number to the test API. This can be used for DHIR with minimal modifications.


## API

The API does not allow OPTIONS pre-flight call. As a workaround, a proxy server is provided in the server folder that intercepts OPTION requests and sets appropriate headers. The API details are available [here](https://www.innovation-lab.ca/search-medication-dispense-r2/).

## How to use:

* STEP 1: Sign up for a free test account at the [innovation-lab website](https://www.innovation-lab.ca/) and get you access key.

* STEP 2: Find a test health card number [here](https://www.innovation-lab.ca/test-data/)

* STEP 3: Get the license text [here](https://www.innovation-lab.ca/submitting-fhir-messages/)

* STEP 4: Rename the /config/config.example.js file to config.js and add access credentials obtained above.

* STEP 5:  run

### `npm install` or `yarn install`

* STEP 6: cd to server and run

### `npm install` or `yarn install`

* STEP 7: From the server folder

### `npm run dev`

* STEP 8: Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Conceptual Diagram from my [OpenMRS OWA boilerplate](https://github.com/dermatologist/openmrs-owa-react-boilerplate). (This is similar)

![OpenMRS OWA React](https://raw.github.com/dermatologist/openmrs-owa-react-boilerplate/master/docs/owa-react.png)

This project was generated with [Create Redux App](https://github.com/jonidelv/generator-create-redux-app). Refer to `docs/create-redux-app` to find more information on how to perform common tasks.

# Author

Bell Eapen (McMaster U)
