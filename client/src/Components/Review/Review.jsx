import React from 'react';

const Review = ({review}) => {
  return (
    <div className="post">
      <div className="rating">
        <div className="stars">
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
        </div>
        <div className="created_date">{review.created_date}</div>
      </div>
      <div className="post_photos--num">
        <a className="post_photos--link" href="#">
          <i className="fa fa-camera" aria-hidden="true"></i>
          <span className="post_photos--link---text">{review.photos} Photos</span>
        </a>
      </div>
      <div className="review">
        <p>
          {review.post}
        </p>
      </div>
      <div className="review_images">
        <img className="images" src="https://loremflickr.com/g/320/240/restaurant?random=1"  />
        <img className="images" src="https://loremflickr.com/g/320/240/restaurant?random=2" />
        <img className="images" src="https://loremflickr.com/g/320/240/restaurant?random=3" />
      </div>
      <div className="emoji">
        <span className="emoji_icon"> <i className="fa fa-lightbulb-o" aria-hidden="true"></i> {review.useful} </span>
        <span className="emoji_icon"> <i className="fa fa-smile-o" aria-hidden="true"></i> {review.cool} </span>
        <span className="emoji_icon"> <i className="fa fa-user-o" aria-hidden="true"></i> {review.funny} </span>
      </div>
    </div>
  )
}

export default Review;