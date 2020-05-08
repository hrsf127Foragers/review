import React from 'react';
import axios from 'axios';

import Restaurant from '../Restaurant/Restaurant.jsx';
import User from '../User/User.jsx';
import Review from '../Review/Review.jsx';
import ShareModal from '../Modal/ShareModal.jsx';
import EmbedModal from '../Modal/EmbedModal.jsx';


import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      paginationLimit: 10,
      paginationNum: 0,
      active: false,
      showShareModal: false,
      showEmbedModal: false,
    }

    this.pagination = this.pagination.bind(this);
    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/1/reviews')
      .then(({data}) => {
        // console.log('Reviews by restaurant id => ', data);
        this.pagination(data)
        // this.setState({ reviews: data });
      })
      .catch(err => {
        console.log('Fetch Restaurants ERROR: ', err)
      })
  }

  showShareModal() {
    console.log('toggle share modal')
    this.setState({ showShareModal: !this.state.showShareModal });
  }

  showEmbedModal() {
    console.log('toggle embed modal')
    this.setState({ showEmbedModal: !this.state.showEmbedModal });
  }

  pagination(data) {
    let paginationContainer = [];

    let subArr;

    while(data.length) {
      subArr = data.splice(0, this.state.paginationLimit);
      paginationContainer.push(subArr);
    }

    this.setState({ reviews: paginationContainer })
  }

  handlePaginationClick(e, paginateNum) {
    if(this.state.paginationNum < this.state.reviews.length) {
      this.setState({
        paginationNum: paginateNum
      })
    }
  }

  render() {

    let reviewTemplate = this.state.reviews[this.state.paginationNum] && this.state.reviews[this.state.paginationNum].map((el, index) => {
        <div onClick={() => this.showShareModal()}>Toggle modal</div>
        return <Restaurant
                  key={index} review={el}
                  showShareModal={this.showShareModal.bind(this)}
                  showEmbedModal={this.showEmbedModal.bind(this)}
                  />
    });

    let pagination = this.state.reviews.map((el, index) => {
      let classes = index === this.state.paginationNum ? "active " : ""
      return <span key={index} className={classes + 'pagination'} onClick={(e) => this.handlePaginationClick(e, index)}> {index +1}</span>
    })

    return (
      <div className={styles.review_parent__container}>
        {reviewTemplate}
        <div className={styles.pagination_container}>
          {pagination}
        </div>
        {this.state.showShareModal ? <ShareModal showShareModal={this.showShareModal.bind(this)}/> : <div></div>}

        {this.state.showEmbedModal ? <EmbedModal showEmbedModal={this.showEmbedModal.bind(this)}/> : <div></div>}
      </div>
    )
  }
}

export default App;