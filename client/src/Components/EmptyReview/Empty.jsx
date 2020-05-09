import React from 'react';
import $ from 'jquery';

import styles from './Empty.css';

class Empty extends React.Component {
  constructor(props) {
    super();

    this.state = {
      starColor: ["rgb(239, 88, 1)", "rgb(239, 88, 20)", "rgb(239, 88, 60)", "rgb(239, 88, 90)", "#f43839"]
    }
  }

  componentDidMount() {
    $('.hover_empty_stars').mouseenter( e => {
      console.log('(mouseOver) this: => ', e.currentTarget.dataset.color)
      let currentTargetColor = e.currentTarget.dataset.color;

      let starsElement = $('.fa.fa-star.hover_empty_stars');
      console.log('star element => ', starsElement)
      for(let i = 0; i < starsElement.length; i++) {
        let el = Number(starsElement[i].dataset.color);

        if(el <= currentTargetColor) {
          console.log('applied background => ', i)
          $(starsElement[i]).css('backgroundColor', this.state.starColor[i])
        } else {
          console.log('dont =>', i)
          $(starsElement[i]).css('backgroundColor', 'rgba(0, 0, 0, 0.15)')
        }
      }
    })

    $('.star').mouseleave( e => {
      let starsElement = $('.fa.fa-star.hover_empty_stars');
      for(let i = 0; i < starsElement.length; i++) {
        $(starsElement[i]).css('backgroundColor', 'rgba(0, 0, 0, 0.15)')
      }
    })
  }

  render() {
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
            <div className={styles.stars+ ' star'}>
              <span className={styles.review_stars}> <i data-color="0" className="fa fa-star hover_empty_stars" aria-hidden="true"></i> </span>
              <span className={styles.review_stars}> <i data-color="1" className="fa fa-star hover_empty_stars" aria-hidden="true"></i> </span>
              <span className={styles.review_stars}> <i data-color="2" className="fa fa-star hover_empty_stars" aria-hidden="true"></i> </span>
              <span className={styles.review_stars}> <i data-color="3" className="fa fa-sta hover_empty_starsr" aria-hidden="true"></i> </span>
              <span className={styles.review_stars}> <i data-color="4" className="fa fa-star hover_empty_stars" aria-hidden="true"></i> </span>
              <span className={styles.review_stars}> <i data-color="5" className="fa fa-star hover_empty_stars" aria-hidden="true"></i> </span>
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
}

export default Empty;