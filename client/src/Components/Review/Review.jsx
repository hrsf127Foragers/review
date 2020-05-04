import React from 'react';

const Review = () => {
  return (
    <div className="post">
      <div className="rating">
        <div className="stars">
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
          <span className="review_stars"> <i className="fa fa-star" aria-hidden="true"></i> </span>
        </div>
        <div className="created_date">12/31/2019</div>
      </div>
      <div className="post_photos--num">
        <a className="post_photos--link" href="#">
          <i className="fa fa-camera" aria-hidden="true"></i>
          <span className="post_photos--link---text">3 Photos</span>
        </a>
      </div>
      <div className="review">
        <p>
          What it is? and what it was? is just magnificent I don't know if it's new owners or what but the food is delicious, I only eat chicken and they had the best tacos I've ever tried, the meat is great quality the tacos where really made professionally, and the flavors are just so great and perfect, they had a full clean and huge variety salsa bar that made me by another 3 tacos just to try the salsas. Great food wonderful customer service and an inviting place. I'll definitely go back and eat there when ever I'm in the Area. They should have a sign that says "Satisfaction Guaranteed" lol you'll be satisfied.
        </p>
        <p>
          What it is? and what it was? is just magnificent I don't know if it's new owners or what but the food is delicious, I only eat chicken and they had the best tacos I've ever tried, the meat is great quality the tacos where really made professionally, and the flavors are just so great and perfect, they had a full clean and huge variety salsa bar that made me by another 3 tacos just to try the salsas. Great food wonderful customer service and an inviting place. I'll definitely go back and eat there when ever I'm in the Area. They should have a sign that says "Satisfaction Guaranteed" lol you'll be satisfied.
        </p>
      </div>
      <div className="review_images">
        <img className="images" src="https://loremflickr.com/g/320/240/restaurant" />
        <img className="images" src="https://loremflickr.com/g/320/240/restaurant" />
        <img className="images" src="https://loremflickr.com/g/320/240/restaurant" />
      </div>
      <div className="emoji">
        <span className="emoji_icon"> <i className="fa fa-lightbulb-o" aria-hidden="true"></i> 3 </span>
        <span className="emoji_icon"> <i className="fa fa-smile-o" aria-hidden="true"></i> 1</span>
        <span className="emoji_icon"> <i className="fa fa-user-o" aria-hidden="true"></i> 4</span>
      </div>
    </div>
  )
}

export default Review;