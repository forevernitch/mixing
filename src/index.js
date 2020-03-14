import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Index.js is the renderer for the JSX in the app.js component
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
