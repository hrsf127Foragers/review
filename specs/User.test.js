/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import User from '../client/src/Components/User/User';


describe('MyComponent', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
})

describe('User Component', () => {
  it('<User /> component should exist', () => {
    const wrapper = shallow(<User user={{}}/>);
    expect(wrapper).toExist()
  });
});
