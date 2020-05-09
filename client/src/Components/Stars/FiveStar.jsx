import React from 'react';

import styles from './FiveStar.css';

const FiveStar = () => {
  return (
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
  )
}

export default FiveStar;