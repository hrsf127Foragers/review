import React from 'react';

import User from '../User/User.jsx';
import Review from '../Review/Review.jsx';
import EmptyReview from '../EmptyReview/Empty.jsx';

import styles from './Restaurant.css';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: {},
      user: {},
      showShareMenu: false
    }

    this.extractData = this.extractData.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    this.extractData(this.props.review);

    window.addEventListener('resize', (e) => {
      if(window.innerWidth <= 650) {
        this.setState({ showShareMenu: true })
      }
    })
  }


  extractData(review) {
    // console.log('extracting data => ', review);

    let userObj = {
      name: review.user_name,
      location: review.location,
      friends: review.friends,
      reviews: review.reviews,
      photos: review.photos,
      picture: review.image_url + '?random' + Math.floor(Math.random() * 100 +1)
    }


    let reviewObj = {
      user_name: review.user_name,
      userpicture: review.image_url + '?random=' + Math.floor(Math.random() * 100 +1),
      friends: review.friends,
      restaurant_name: review.restaurant_name,
      restaurant_reviews: review.reviews,
      rating: review.rating,
      created_date: review.created_at,
      photos: Math.floor(Math.random() * 5 + 0),
      post: review.post,
      useful: review.useful,
      cool: review.cool,
      funny: review.funny,
      image_url: review.image_url + '?random' + Math.floor(Math.random() * 100 +1)


    }

    // console.log('user obj => ', userObj)
    // console.log('review obj => ', reviewObj)

    this.setState({
      user: userObj,
      review: reviewObj
    })
  }

  handleMouseEnter() {
    this.setState({ showShareMenu: true })
  }

  handleMouseLeave() {
    this.setState({ showShareMenu: false })
  }

  handleMouseOver() {
    this.setState({ showShareMenu: true })
  }

  render() {
    return (
      <div>
        <div className={styles.border_top}></div>
        <div className={styles.body_content}
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
            onMouseOver={() => this.handleMouseOver()}
          >
          <User
            user={this.state.user}
            showShareModal={this.props.showShareModal}
            showEmbedModal={this.props.showEmbedModal}
            showShareMenu={this.state.showShareMenu}
            review={this.state.review}
          />
          <Review review={this.state.review}/>
        </div>
      </div>
    )
  }
}

export default Restaurant;