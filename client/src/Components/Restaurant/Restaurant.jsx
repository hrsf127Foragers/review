import React from 'react';


import User from '../User/User.jsx';
import Review from '../Review/Review.jsx';

import styles from './Restaurant.css';
import userStyle from '../User/User.css';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: {},
      user: {}
    }

    // console.log('Restaurants => ', props.review)
    this.extractData = this.extractData.bind(this);
  }

  componentDidMount() {
    this.extractData(this.props.review)
  }

  extractData(review) {
    // console.log('extracting data => ', review);

    let userObj = {
      name: review.user_name,
      location: review.location,
      friends: review.friends,
      reviews: review.reviews,
      photos: review.photos,
      picture: 'https://loremflickr.com/g/320/240/person?'
    }

    let reviewObj = {
      rating: review.rating,
      created_date: review.created_at,
      photos: Math.floor(Math.random() * 5 + 0),
      post: review.post,
      useful: review.useful,
      cool: review.cool,
      funny: review.funny,
      image_url: review.image_url
    }

    this.setState({
      user: userObj,
      review: reviewObj
    })
  }

  render() {
    return (
      <div>
        <div className={styles.border_top}></div>
        <div className={styles.body_content}>
          <User user={this.state.user} />
          <Review review={this.state.review} />
        </div>
      </div>
    )
  }
}

export default Restaurant;