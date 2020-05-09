import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App/App.jsx';

let randomRestaurant = Math.floor(Math.random() * 100 + 1);

ReactDOM.render(<App restaurantId={randomRestaurant} />, document.getElementById('review'));
