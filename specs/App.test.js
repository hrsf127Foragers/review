/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import axios from 'axios';
import App from '../client/src/Components/App/App';

describe('MyComponent', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
})

describe('App Component', () => {
  it('<App /> component should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined()
  });
});
