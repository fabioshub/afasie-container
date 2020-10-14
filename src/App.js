import React, {useState, useEffect} from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import StartScreen from './StartScreen';
import Concepts from './concepts/setup/Concepts';
import GeluidEnKlik from './concepts/setup/geluidEnKlik/GeluidEnKlik';
import GeluidEnKlikVideo from './concepts/setup/geluidEnKlik/GeluidEnKlikVideo';
import GevoelVideo from './concepts/setup/Gevoel/GevoelVideo';
import Gevoel from './concepts/setup/Gevoel/Gevoel';
import Mijlpaal from './concepts/setup/Mijlpaal/Mijlpaal';
import MijlpaalVideo from './concepts/setup/Mijlpaal/MijlpaalVideo';


function App() {
  const [pathname, setPathname] = useState('');
  let history = useHistory();

  history.listen(loc => {
    const title = loc.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
    if (title.trim().length) {
      setPathname('Home / ' + title);
    } else {
      setPathname('Home')
    }
  })
  useEffect(() => {
    const title = window.location.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
    if (title.trim().length) {
      setPathname('Home / ' + title);
    } else {
      setPathname('Home')
    }
  }, [])
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {pathname}
          </Typography>
        </Toolbar>
      </AppBar>
        <Route exact path="/concepten/geluid-en-klik/video" component={GeluidEnKlikVideo} />
        <Route exact path="/concepten/geluid-en-klik" component={GeluidEnKlik} />
        <Route exact path="/concepten/gevoel/video" component={GevoelVideo} />
        <Route exact path="/concepten/gevoel" component={Gevoel} />
        <Route exact path="/concepten/mijlpaal" component={Mijlpaal} />
        <Route exact path="/concepten/mijlpaal/video" component={MijlpaalVideo} />
        <Route exact path="/concepten" component={Concepts} />
        <Route exact path="/" component={StartScreen} />
    </div>
  );
}

export default App;
