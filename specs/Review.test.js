/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import Review from '../client/src/Components/Review/Review';

describe('MyComponent', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
})

describe('Review Component', () => {
  it('<Review /> component should exist', () => {
    const wrapper = shallow(<Review />);
    // expect(wrapper).toBeDefined()
  });
});
