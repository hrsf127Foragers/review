import React from 'react';

import styles from './EmbedModal.css';

const EmbedModal = ({showEmbedModal}) => {

  return (
    <div className={styles.modal}>
      <section className={styles.modal_main}>
        <div className={styles.form_heading}>
          <h1 className={styles.heading}>Embed This Review</h1>
          <p className={styles.close} onClick={() => showEmbedModal()}>X</p>
        </div>

        <div className={styles.tagline}>
          <h4>Embedding Code</h4>
          <span className={styles.tagline_text}>Add this review to your website by copying the code below</span>
        </div>

        <div className={styles.restaurant_url}>
          <input className={styles.site_url} type="text" placeholder='<span class="yelp-review" data-review-id="BEKynAKsr2J-kSPscp36qQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=Alm1ibQS3RqzC5LCInDhGw"'></input>
        </div>

        <div className={styles.copy_btn}>Copy Code</div>

        <div className={styles.preview}>
          <h4 className={styles.heading}>Preview</h4>
          <div className={styles.preview_container}>
            <div className={styles.preview_detail}>
              <div className={styles.restaurant_preview__heading}>
                <h4 className={styles.restaurant_title}>Taco Boy</h4>
                <div className={styles.preview_rating}>
                  <div className={styles.stars}>
                    <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                    <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                    <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                    <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                    <span className={styles.review_stars_grey}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                    <span className="review_count">9 reviews</span>
                  </div>
                </div>
              </div>
              <div className={styles.site_image__container}>
                <span className={styles.site_name}>yelp</span>
                <span className={styles.site_logo}>
                  <i className="fa fa-yelp" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className={styles.preview_post__container}>
              <div className={styles.user_info}>
                <img sr="https://loremflickr.com/g/320/240/person?random=1" alt="user image" />
                <div className={styles.user_info__data}>
                  <h4 className={styles.user_name}>M G.</h4>
                  <div className={styles.user_info_rating}>
                    <p className={styles.user_friends}>
                      <span className={styles.friends_1}> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
                      <span className={styles.friends_2}> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
                      <span className={styles.preview_friends_count}> 0 </span>
                    </p>
                    <p className={styles.user_reviews}>
                      <span className={styles.user_star}> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
                      <span className={styles.preview_stars_count}>9</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.preview_rating}>
                <div className={styles.stars}>
                  <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                  <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                  <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                  <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                  <span className={styles.review_stars}> <i className="fa fa-star" aria-hidden="true"></i> </span>
                  <span className={styles.created_date}>4/4/2020</span>
                </div>
              </div>

              <div className={styles.preview_post_container}>
                <p className={styles.preview_post}>
                Called in a carry out order and the food did not disappoint. Their al pastor taco salad is delicious and so is their steak quesadilla.  They even through in some free chips and salsa :) Definitely recommend this place and will be coming back!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmbedModal;
