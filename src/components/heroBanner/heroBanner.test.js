import React from 'react';
import ReactDOM from 'react-dom';
import HeroBanner from './heroBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroBanner />, div);
});
