import React from 'react';

import User from './User.jsx';
import Review from './Review.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="body_content">
        <User />
        <Review />
      </div>
    )
  }
}

export default App;