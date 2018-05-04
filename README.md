# Ehealth React Redux
[![generator-create-redux-app](https://img.shields.io/badge/built%20with-generator--create--redux--app-brightgreen.svg)](https://github.com/jonidelv/generator-create-redux-app)

This is a React-Redux boilerplate for developing web applications that interact with Innovation Lab's DHDR. 
Queries are made by submitting a health card number to the test API. This can be used for DHIR with minimal modifications.


## API

The API does not allow OPTIONS pre-flight call. Options call cannot be avoided as header parameters need to be set. As a workaround, a proxy server is provided in the server folder that intercepts OPTION requests and sets appropriate headers. The API details are available [here](https://www.innovation-lab.ca/search-medication-dispense-r2/).

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


# Conceptual Diagram from my [OpenMRS OWA boilerplate](https://github.com/dermatologist/openmrs-owa-react-boilerplate). (This is similar)

![OpenMRS OWA React](https://raw.github.com/dermatologist/openmrs-owa-react-boilerplate/master/docs/owa-react.png)

This project was generated with [Create Redux App](https://github.com/jonidelv/generator-create-redux-app). Refer to `docs/create-redux-app` to find more information on how to perform common tasks.

Once the installation of the proxy server is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run generate`

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s and `container`s.

# Author

Bell Eapen (McMaster U)
