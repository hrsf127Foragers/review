import React from 'react';
import styles from './ShareModal.css';

const ShareModal = () => {
  return (
    <form>
      <div>
        <h2>Share review</h2>
        <div>X</div>
      </div>
      <div>
        <h3>facebook</h3>
        <h3>twitter</h3>
        <h3>twitter</h3>
      </div>
      <div>
        <input type="text" placeholder="restaurant url"></input>
      </div>
      <div>
        <label>Your Name</label>
        <input type="text" ></input>
        <label>Your Email</label>
        <input type="email" ></input>
        <label>To</label>
        <input type="email" ></input>
        <textarea rows="50" cols="50"></textarea>
      </div>
    </form>
  )
}

export default ShareModal;