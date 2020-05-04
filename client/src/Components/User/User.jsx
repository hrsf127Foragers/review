import React from 'react';

const User = () => {
  return (
    <div className="user">
      <img className="user_image" src="missing.png" />
      <div className="user_info">
        <h3 className="user_name">User Name</h3>
        <h4 className="user_location">User Location</h4>
        <p className="user_friends">
          <span></span>
          <span></span>
          <span>0 friends</span>
        </p>
        <p className="user_reviews">
          <span></span>
          <span>13 reviews</span>
        </p>
      </div>
    </div>
  )
}

export default User;