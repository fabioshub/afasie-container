import React from 'react'; 
import ReactDOM from 'react-dom';
import './prototype/complete/Complete.scss';
import './index.css';
import App from './App';
import {
  Route,
  BrowserRouter as Router,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
