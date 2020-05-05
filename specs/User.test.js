/* eslint-env jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import User from '../client/src/Components/User/User';

describe('User Component', () => {
  it('<User /> component should exist', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toExist()
  });
});
