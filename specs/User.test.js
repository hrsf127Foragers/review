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

  let userObj = {
    friends: 93,
    location: "Greenville, GA",
    name: "Joe Brown",
    photos: 90,
    picture: "https://loremflickr.com/g/320/240/person",
    reviews: 224
  }

  it('<User /> component should have property call name stored in html with className ".user_name"', () => {
    const wrapper = shallow(<User user={userObj}/>);
    expect(wrapper.find('.user_name').text()).toEqual('Joe Brown');
  });

  it('<User /> component should have property call picture stored in html img tag', () => {
    const wrapper = shallow(<User user={userObj}/>);
    expect(wrapper.containsMatchingElement(<img src="https://loremflickr.com/g/320/240/person" />)).toBe(true)
  });

  it('<User /> component should have property call location stored in html with className ".user_location"', () => {
    const wrapper = shallow(<User user={userObj}/>);
    expect(wrapper.find('.user_location').text()).toEqual('Greenville, GA');
  });

});
