import React from 'react';
import axios from 'axios';

import Restaurant from '../Restaurant/Restaurant.jsx';
import User from '../User/User.jsx';
import Review from '../Review/Review.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
      users: [],
      reviews: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/1')
      .then(({data}) => {
        // console.log('Reviews by restaurant id => ', data);
        this.setState({ reviews: data });
      })
      .catch(err => {
        console.log('Fetch Restaurants ERROR: ', err)
      })
  }

  render() {

    let reviewTemplate = this.state.reviews && this.state.reviews.map((el, index) => {
      return <Restaurant key={index} review={el}/>
    });

    return (
      <div className="review_parent--container"> {reviewTemplate} </div>
    )
  }
}

export default App;