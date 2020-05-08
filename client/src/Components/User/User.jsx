import React from 'react';

import styles from './User.css';

const User = ({user, showShareModal, showEmbedModal}) => {
  // console.log('user => ', user)
  return (
    <div className={styles.user_container}>
      <div className={styles.user_infos}>
        <img className={styles.user_image} src={user.picture} />
        <div className={styles.user_detail}>
          <h3 className={styles.user_name}>{user.name}</h3>
          <h4 className={styles.user_location}>{user.location}</h4>
          <p className={styles.user_friends}>
            <span className={styles.friends_1}> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
            <span className={styles.friends_2}> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
            <span> {user.friends} friends </span>
          </p>
          <p className={styles.user_reviews}>
            <span className={styles.user_star}> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
            <span>{user.reviews} reviews</span>
          </p>
          <p className={styles.user_photos}>
            <span className={styles.user_photo__num}> <i className="fa fa-camera" aria-hidden="true"></i> </span>
            <span>{user.photos} photos</span>
          </p>
        </div>
      </div>
      <div className={styles.shareReview}>
          <div className={styles.share} onClick={() => showShareModal()}>
            <span> <i className="fa fa-share" aria-hidden="true"></i> </span>
            <span className={styles.share_text}>
              Share Review
            </span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.embed} onClick={() => showEmbedModal()}>
            <span> <i className="fa fa-code" aria-hidden="true"></i> </span>
            <span className={styles.embed_text}>
              Embed Review
            </span>
          </div>
        </div>
    </div>
  )
}

export default User;