import React from 'react';

import styles from './Review.css';

const Review = ({review}) => {
  let urlImge1 = `https://loremflickr.com/g/320/240/restaurant?random=${Math.floor(Math.random() * 10 +1)}`
  let urlImge2 = `https://loremflickr.com/g/320/240/restaurant?random=${Math.floor(Math.random() * 20 +1)}`
  let urlImge3 = `https://loremflickr.com/g/320/240/restaurant?random=${Math.floor(Math.random() * 30 +1)}`
  return (
    <div className={styles.post}>
      <div className={styles.rating}>
        <div className={styles.stars}>
          <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
        </div>
        <div className={styles.created_date}>{review.created_date}</div>
      </div>
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
        <img className={styles.images} src={urlImge1} />
        <img className={styles.images} src={urlImge2} />
        <img className={styles.images} src={urlImge3} />
      </div>
      <div className={styles.emoji}>
        <span className={styles.emoji_icon}> <i className="fa fa-lightbulb-o" aria-hidden="true"></i> {review.useful} </span>
        <span className={styles.emoji_icon}> <i className="fa fa-smile-o" aria-hidden="true"></i> {review.cool} </span>
        <span className={styles.emoji_icon}> <i className="fa fa-user-o" aria-hidden="true"></i> {review.funny} </span>
      </div>
    </div>
  )
}

export default Review;