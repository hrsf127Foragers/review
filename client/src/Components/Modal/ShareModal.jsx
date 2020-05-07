import React from 'react';

import styles from './ShareModal.css';

const ShareModal = ({showShareModal}) => {

  return (
    <div className={styles.modal}>
      <section className={styles.modal_main}>
        <div className={styles.form_heading}>
          <h1>Share review</h1>
          <h1 className={styles.close} onClick={() => showShareModal()}>X</h1>
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

        <div className={styles.form_divider}>
          <h3><span>OR</span></h3>
        </div>

        <div className={styles.user_input}>
          <div className={styles.name}>
            <label>Your Name</label>
            <input className={styles.name_input}></input>
          </div>
          <div className={styles.email}>
            <label>Your Email</label>
            <input className={styles.from_email}></input>
          </div>
          <div className={styles.email}>
            <label>To <span className="message">Email Addresses</span></label>
            <input className={styles.to_email}></input>
          </div>
          <div className={styles.note}>
            <label>Add a note <span className="message">Optional</span></label>
            <textarea className={styles.textarea} rows="10" cols="50"></textarea>
          </div>

          <div className={styles.share_btn}>Share</div>
        </div>
      </section>
    </div>
  );
};

export default ShareModal;
