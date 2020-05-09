import React from 'react';

import styles from './Empty.css';

const Empty = ({review}) => {
  return (
    <div className={styles.empty_container}>
      <div className={styles.user_container}>
        <div className={styles.user_infos}>
          <div className={styles.user_image} > </div>
          <div className={styles.user_detail}>
            <h3 className={styles.user_name}></h3>
            <h4 className={styles.user_location}></h4>
            <p className={styles.user_friends}>
              <span className={styles.friends_1}> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
              <span className={styles.friends_2}> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
              <span className={styles.empty_friend}> </span>
            </p>
            <p className={styles.user_reviews}>
              <span className={styles.user_star}> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
              <span className={styles.empty_review}> </span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.post}>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
            <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
            <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
            <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
            <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.review}>
          <a className={styles.share_review} href="#">
            <p>
              Start your review
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Empty;