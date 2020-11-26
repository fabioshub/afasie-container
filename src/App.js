import React, {useState, useEffect} from 'react';
import './App.scss';
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
import Prototype from './prototype/Prototype';
import Instellingen from './prototype/Instellingen';
import Planten from './prototype/Planten';
import Achievements from './prototype/Achievements';
import ReactGA from 'react-ga';
import { Blij, Boos, G1, G2, G3, G4, Onverschillig, Verdrietig } from './concepts/setup/Gevoel/GevoelsOpties';
import { Beginscherm } from './prototype/complete/Beginscherm';
import { Klaar } from './prototype/complete/Klaar';
import { MijlpaalOverzicht } from './prototype/complete/MijpaalOverzicht';
import { NaResultaat } from './prototype/complete/NaResultaat';
import { Oefening } from './prototype/complete/Oefening';
import { Oefenscherm } from './prototype/complete/Oefenscherm';
import { Resultaat } from './prototype/complete/Resultaat';

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
    ReactGA.initialize('G-86K3Q9C6GS');
    ReactGA.pageview('/');
    const title = window.location.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
    if (title.trim().length) {
      setPathname('Home / ' + title);
    } else {
      setPathname('Home')
    }
  }, [])

  return (
    <div className="App scroll1">

      {
        routes.map(route => {
          const Comp = route.component;
          return <Route exact path={route.route}>
            {
              route.enableHeader && <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">
                  {pathname}
                </Typography>
              </Toolbar>
            </AppBar>
            }
            <Comp />
          </Route>
        })
      }
    </div>
  );
}

export default App;

const routes = [
  {
    route: '/',
    component: StartScreen,
    enableHeader: true
  },
  {
    route: '/prototype',
    component: Beginscherm,
  },
  {
    route: '/prototype/klaar',
    component: Klaar,
  },
  {
    route: '/prototype/MijlpaalOverzicht',
    component: Oefenscherm,
  },
  {
    route: '/prototype/naresultaat',
    component: NaResultaat,
  },
  {
    route: '/prototype/oefening',
    component: Oefening,
  },
  {
    route: '/prototype/oefenscherm',
    component: Oefenscherm,
  },
  {
    route: '/prototype/resultaat',
    component: Resultaat,
  },
  {
    route: '/concepten/planten',
    component: Planten,
    enableHeader: true
  },
  {
    route: '/concepten/planten',
    component: Planten,
    enableHeader: true
  },
  {
    route: '/concepten/kiezen',
    component: Prototype,
    enableHeader: true
  },
  {
    route: '/concepten/prijzenkast',
    component: Achievements,
    enableHeader: true
  },
  {
    route: '/concepten/instellingen',
    component: Instellingen,
    enableHeader: true
  },
  {
    route: '/concepten',
    component: Concepts,
    enableHeader: true
  },
  {
    route: '/concepten/mijlpaal/video',
    component: MijlpaalVideo,
    enableHeader: true
  },
  {
    route: '/concepten/mijlpaal',
    component: Mijlpaal,
    enableHeader: true
  },
  {
    route: '/concepten/geluid-en-klik/video',
    component: GeluidEnKlikVideo,
    enableHeader: true
  },
  {
    route: '/concepten/geluid-en-klik',
    component: GeluidEnKlik,
    enableHeader: true
  },
  {
    route: '/concepten/gevoel/video',
    component: GevoelVideo,
    enableHeader: true
  },
  {
    route: '/concepten/gevoel/boos',
    component: Boos,
    enableHeader: true
  },
  {
    route: '/concepten/gevoel/onverschillig',
    component: Onverschillig,
    enableHeader: true
  },
  {
    route: '/concepten/gevoel/Verdrietig',
    component: Verdrietig,
    enableHeader: true
  },
  {
    route: '/concepten/gevoel/Blij',
    component: Blij,
    enableHeader: true
  },
  {
    route: '/concepten/gevoel',
    component: Gevoel,
    enableHeader: true
  },
  {
    route: '/concepten/geluid-en-klik/video',
    component: <div></div>,
    enableHeader: true
  },
  {
    route: '/concepten/geluid-en-klik/video',
    component: <div></div>,
    enableHeader: true
  },
  {
    route: '/concepten/geluid-en-klik/video',
    component: <div></div>,
    enableHeader: true
  },
]
