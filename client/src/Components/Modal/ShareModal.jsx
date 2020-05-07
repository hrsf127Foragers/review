import React from 'react';

import styles from './ShareModal.css';

const ShareModal = () => {

  return (
    <div className={styles.modal}>
      <section className={styles.modal_main}>
        <div className={styles.form_heading}>
          <h1>Share review</h1>
          <h1 className={styles.close}>X</h1>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.facebook}>
            <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
            <span className={styles.facebook_text}>Share on Facebook</span>
          </div>
          <div className={styles.twitter}>
            <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
            <span className={styles.twitter_text}>Share on Twitter</span>
          </div>
        </div>
        <div className={styles.restaurant_url}>
            <span className={styles.icon}>icon</span>
            <input className={styles.site_url} type="text" placeholder="web url"></input>
          </div>
      </section>
    </div>
  );
};

export default ShareModal;