import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from './components/Router';

//import Bootstrap JS
import "bootstrap";
//import Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

if (process.env.REACT_APP_ENV!=='local') require('./assets/css/web.min.css');
else require('./assets/scss/web.scss');

ReactDOM.render(
  	<React.StrictMode>
  		<Router.Index />
  	</React.StrictMode>,
  document.getElementById('root')
);