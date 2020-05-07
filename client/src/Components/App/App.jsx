import React from 'react';
import axios from 'axios';

import Restaurant from '../Restaurant/Restaurant.jsx';
import User from '../User/User.jsx';
import Review from '../Review/Review.jsx';
import ShareModal from '../Modal/ShareModal.jsx';


import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      paginationLimit: 10,
      paginationNum: 0,
      active: false,
      showShareModal: true,
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

  toggleShareModal() {
    console.log('toggle modal')
    this.setState({ showShareModal: !this.state.showShareModal });
  }

  toggleEmbedModal() {
    this.setState({ showShareModal: false });
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
      return <Restaurant key={index} review={el}/>
    });

    let pagination = this.state.reviews.map((el, index) => {
      let className = index === this.state.paginationNum ? "active" : ""
      return <span key={index} className={className + ' pagination'} onClick={(e) => this.handlePaginationClick(e, index)}> {index +1}</span>
    })

    return (
      <div className="review_parent--container">
        {reviewTemplate}
        <div className={styles.pagination_container}>
          {pagination}
        </div>
        <div onClick={(e) => this.toggleShareModal()} >TESTING</div>
        {this.state.showShareModal ? <ShareModal handleClickClose={this.toggleShareModal.bind(this)}/> : <div></div>}
      </div>
    )
  }
}

export default App;