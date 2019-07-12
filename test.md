Use Jest to test React apps.


References:
1. https://facebook.github.io/create-react-app/docs/running-tests#docsNav
2. https://reactjs.org/docs/test-utils.html
3. https://jestjs.io/docs/en/tutorial-react

---

Jest is intended to be used for unit tests of logic and components (rather than the DOM quirks).  
Use a separate tool for browser end-to-end tests if needed.

Jest will look for test files with any of the following naming conventions:
1. Files this `.js` suffix in `__tests__` folders.
2. Files with `.test.js` suffix.
3. Files with `.spec.js` suffix.  

The files/folders can be located at any depth under the `src` top level folder.

By default, when we run `npm test`, Jest will launch in watch mode*, 
and only run the tests related to files changed since the last commit. 
Press `a` in the watch mode to force Jest to run all tests.

---

Jest provides
1. `it()` / `test()` for creating tests.
2. `describe()` for logical grouping. 
3. `expect()` for making assertions (https://jestjs.io/docs/en/expect.html#content).
4. `jest.fn()` for creating 'spies' or mock functions. 
5. `xit()` for temporarily exclude a test from being excuted.
6. `fit()` for focusing on a specific test without runnig any other testing.
7. `npm test -- --coverage` for creating a coverage report. 
8. `npm test --watchAll=false` or `CI=true npm test` for running test only once instead of launching the watcher. 

---

#### Component Testing:
1. Smoke test: verifies that a component renders without throwing.
2. Shallow rendering: renders the component and tests some of the output.
3. Full rendering: tests component lifecycle and state changes.

---

Install Enzyme (along with an Adapter corresponding to the version of React you are using): 
1. `yarn add enzyme enzyme-adapter-react-16 react-test-render`
2. Configure the adapter in global setup file `src/setupTests.js`:
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

#### Enzyme rendering APIs:
1. `shallow()` - tests compontents in isolation from the child components they render.
2. `mount()` - creates full rendering tests to ensure the components integrate correctly and test state changes and component lifecycle.

Enzyme uses Chai and Sinon for assertions, We can still use `expect()` for assertions and `jest.fn()` for spies. 

---

#### Smoke test example:
```
import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

it('renders without crashing', () => {
  shallow(<App />);
});
```
---

#### Shadow rendering example: 
```
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />;
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

---

#### react-testing-library
1. A library for testing React components in a way that resembles the way the components are used by end users.
2. Well suited for unit, integration, and end-to-end testing of React components and apps.
3. Works more directly with DOM nodes (use `jest-dom` for improved assertions).

Install react-testing-libarary and jest-dom
1. `yarn add react-testing-library jest-dom`
2. To avoid boilerplate, make changes in `src/setupTests.js`

```
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';
```

#### Good examples: https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples.

---

VsCode - Jest extension: vscode-jest






