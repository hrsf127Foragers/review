import React from 'react';

const User = ({user}) => {
  // console.log('user => ', user)
  return (
    <div className="user_container">
      <div className="user_infos">
        <img className="user_image" src={user.picture} />
        <div className="user_detail">
          <h3 className="user_name">{user.name}</h3>
          <h4 className="user_location">{user.location}</h4>
          <p className="user_friends">
            <span className="friends_1"> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
            <span className="friends_2"> <i className="fa fa-odnoklassniki" aria-hidden="true"></i> </span>
            <span> {user.friends} friends </span>
          </p>
          <p className="user_reviews">
            <span className="user_star"> <i className="fa fa-star-o" aria-hidden="true"></i> </span>
            <span>{user.reviews} reviews</span>
          </p>
          <p className="user_photos">
            <span className="user_photo--num"> <i className="fa fa-camera" aria-hidden="true"></i> </span>
            <span>{user.photos} photos</span>
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