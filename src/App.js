import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import StartScreen from './StartScreen';
import Concepts from './concepts/setup/Concepts';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/concepts" component={Concepts} />
        <Route exact path="/" component={StartScreen} />
      </Router>
    </div>
  );
}

export default App;
