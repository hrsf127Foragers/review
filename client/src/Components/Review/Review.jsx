import React from 'react';

import FiveStar from '../Stars/FiveStar.jsx';
import FourStar from '../Stars/FourStar.jsx';
import ThreeStar from '../Stars/ThreeStar.jsx';
import TwoStar from '../Stars/TwoStar.jsx';
import OneStar from '../Stars/OneStar.jsx';
import ZeroStar from '../Stars/ZeroStar.jsx';

import styles from './Review.css';

const Review = ({review}) => {
  return (
    <div className={styles.post}>
      {review.rating === 5 && <FiveStar />}
      {review.rating === 4 && <FourStar />}
      {review.rating === 3 && <ThreeStar />}
      {review.rating === 2 && <TwoStar />}
      {review.rating === 1 && <OneStar />}
      {review.rating === 0 && <ZeroStar />}

      <div className={styles.post_photos__num}>
        <a className={styles.post_photos__link} href="#">
          <i className="fa fa-camera" aria-hidden="true"></i>
          <span className={styles.post_photos__link__text}>{review.photos} Photos</span>
        </a>
      </div>
      <div className={styles.review}>
        <p>
          {review.post}
        </p>
      </div>
      <div className={styles.review_images}>
        <img className={styles.images} src="https://loremflickr.com/g/320/240/restaurant?random=1"  />
        <img className={styles.images} src="https://loremflickr.com/g/320/240/restaurant?random=2" />
        <img className={styles.images} src="https://loremflickr.com/g/320/240/restaurant?random=3" />
      </div>
      <div className={styles.emoji}>
        <span className={styles.emoji_icon}> <i className="fa fa-lightbulb-o" aria-hidden="true"></i> Useful <span className={styles.emoji_count}>{review.useful}</span> </span>
        <span className={styles.emoji_icon}> <i className="fa fa-smile-o" aria-hidden="true"></i> Cool <span className={styles.emoji_count}>{review.cool}</span> </span>
        <span className={styles.emoji_icon}> <i className="fa fa-user-o" aria-hidden="true"></i> Funny <span className={styles.emoji_count}>{review.funny}</span> </span>
      </div>
    </div>
  )
}

export default Review;