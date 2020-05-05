/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import App from './App.jsx';

import App from './App.jsx';

console.log('testing => ', App)

describe('<App />', () => {
  it('render <Restaurant /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="review_parent--container" />)).toBe(true);
  });
})
