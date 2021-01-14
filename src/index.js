import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { applyWindowHeightvhFix } from './utils';

applyWindowHeightvhFix();

ReactDOM.render(<App />, document.getElementById('root'));

// Remove console.log
// Add event listener for vh fix
// Implement swipe between screens
