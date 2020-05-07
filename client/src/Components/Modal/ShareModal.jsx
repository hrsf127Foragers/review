import React from 'react';
import styles from './ShareModal.css';

class ShareModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    console.log('clicking on close X')
    // this.props.handleClickClose();
  }

  render() {
      return (
        <div className="modal">
          <section className="modal_main">
            <div className="form_heading">
              <h1>Share review</h1>
              <h1 className="close">X</h1>
            </div>
            <div className="socialMedia">
              <div className="facebook">
                <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                <span className="facebook_text">Share on Facebook</span>
              </div>
              <div className="twitter">
                <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                <span className="twitter_text">Share on Twitter</span>
              </div>
            </div>
            <div className="restaurant_url" onClick={() => this.handleClickClose()}>
                <span className="icon">icon</span>
                <input className="site_url" type="text" placeholder="web url"></input>
              </div>
          </section>
        </div>
      );
  }
}

export default ShareModal;