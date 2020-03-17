import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

ReactDOM.render(<App />, document.querySelector('#app'));
