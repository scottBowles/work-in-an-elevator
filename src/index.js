import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { applyWindowHeightvhFix } from './utils';

applyWindowHeightvhFix();

ReactDOM.render(<App />, document.getElementById('root'));
