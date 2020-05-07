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
    const wrapper = shallow(<Review review={{}}/>);
    expect(wrapper).toExist()
  });

  let reviewObj = {
    cool: 1,
    created_date: "11-10-2019",
    funny: 0,
    image_url: "https://loremflickr.com/g/320/240/restaurant",
    photos: 4,
    post: "Deserunt dolor non sunt in. Minim et mollit irure eiusmod ipsum.↵Minim minim qui non. Occaecat elit pariatur. Adipisicing culpa pariatur. Culpa nostrud anim.↵Sint pariatur occaecat ad proident quis. Officia est consequat mollit enim. Id mollit occaecat consequat. Consectetur do sit esse incididunt velit incididunt. Reprehenderit eu veniam mollit est cillum.",
    rating: 3,
    useful: 0
  }

  it('<Review /> component should have property call name stored in html with className "user_name"', () => {
    const wrapper = shallow(<Review review={reviewObj}/>);
    expect(wrapper.find('.review').text()).toEqual('Deserunt dolor non sunt in. Minim et mollit irure eiusmod ipsum.↵Minim minim qui non. Occaecat elit pariatur. Adipisicing culpa pariatur. Culpa nostrud anim.↵Sint pariatur occaecat ad proident quis. Officia est consequat mollit enim. Id mollit occaecat consequat. Consectetur do sit esse incididunt velit incididunt. Reprehenderit eu veniam mollit est cillum.');
  });
});
