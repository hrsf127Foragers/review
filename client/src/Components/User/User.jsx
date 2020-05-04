import React from 'react';

const User = () => {
  return (
    <div className="user_container">
      <div className="user_infos">
        <img className="user_image" src="https://loremflickr.com/g/320/240/person" />
        <div className="user_detail">
          <h3 className="user_name">User Name</h3>
          <h4 className="user_location">User Location</h4>
          <p className="user_friends">
            <span className="friends_1"> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
            <span className="friends_2"> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
            <span> 44 friends </span>
          </p>
          <p className="user_reviews">
            <span className="user_star"> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
            <span>13 reviews</span>
          </p>
          <p className="user_photos">
            <span className="user_photo--num"> <i className="fa fa-camera" aria-hidden="true"></i> </span>
            <span>10 photos</span>
          </p>
        </div>
      </div>
      <div className="shareReview">
          <div className="share">
            <span> <i className="fa fa-share" aria-hidden="true"></i> </span>
            <span className="share_text">
              Share Review
            </span>
          </div>
          <div className="divider"></div>
          <div className="embed">
            <span> <i className="fa fa-code" aria-hidden="true"></i> </span>
            <span className="embed_text">
              Embed Review
            </span>
          </div>
        </div>
    </div>
  )
}

export default User;