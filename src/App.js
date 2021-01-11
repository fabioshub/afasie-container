import React, { useState, useEffect } from 'react';
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
import Planten from './prototype/Planten';
import Achievements from './prototype/Achievements';
import { Blij, Boos, G1, G2, G3, G4, Onverschillig, Verdrietig } from './concepts/setup/Gevoel/GevoelsOpties';
import { Beginscherm } from './prototype/complete/Beginscherm';
import { Klaar } from './prototype/complete/Klaar';
import { MijlpaalOverzicht } from './prototype/complete/MijpaalOverzicht';
import { NaResultaat } from './prototype/complete/NaResultaat';
import { Oefening1, Oefening2, Oefening3, Oefening4, Oefening5, Oefening6 } from './prototype/complete/Oefening';
import { Oefenscherm } from './prototype/complete/Oefenscherm';
import { Resultaat } from './prototype/complete/Resultaat';

import { Beginscherm as Beginscherm_2 } from './prototype/complete2/Beginscherm';
import { Klaar as Klaar_2 } from './prototype/complete2/Klaar';
import { MijlpaalOverzicht as MijlpaalOverzicht_2 } from './prototype/complete2/MijpaalOverzicht';
import { NaResultaat as NaResultaat_2 } from './prototype/complete2/NaResultaat';
import { Oefening1 as Oefening1_2, Oefening2 as Oefening2_2, Oefening3 as Oefening3_2, Oefening4 as Oefening4_2, Oefening5 as Oefening5_2, Oefening6 as Oefening6_2 } from './prototype/complete2/Oefening';
import { Oefenscherm as Oefenscherm_2 } from './prototype/complete2/Oefenscherm';
import { Resultaat as Resultaat_2 } from './prototype/complete2/Resultaat';
import { Home } from './prototype/complete2/Home';
import { Doelen } from './prototype/complete2/Doelen';
import { Nieuwdoel } from './prototype/complete2/Nieuwdoel';
import { Instellingen as I2 } from './prototype/complete2/Instellingen';

import { Analytics } from './Analytics';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const [pathname, setPathname] = useState('');
  let history = useHistory();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(151,184,51)',
      },
      secondary: {
        main: '#7FBCC6'
      }
    },
  });

  useEffect(() => {
    history.listen(loc => {
      const title = loc.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
      if (!pathname.trim().length) return;
      if (title.trim().length) {
        setPathname('Home / ' + title);
      } else {
        setPathname('Home')
      }
    })
  }, [])

  useEffect(() => {
    const title = window.location.pathname.split('/').filter(a => a.length).join(' / ').split('-').join(' ')
    if (title.trim().length) {
      setPathname('Home / ' + title);
    } else {
      setPathname('Home')
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>

      <div className="App scroll1">
        <Analytics />
        {
          routes.map(route => {
            const Comp = route.component;
            if (route.route.includes('prototype2')) {
              return <Route exact path={route.route}>
                <div className='newP'>
                  <Comp />
                </div>
              </Route>
            }
            return <Route exact path={route.route}>
              <div className='oldP'>
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
              </div>
            </Route>
          })
        }
      </div>
    </ThemeProvider>
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
    route: '/prototype2/home',
    component: Home,
  },
  {
    route: '/prototype2',
    component: Beginscherm_2,
  },
  {
    route: '/prototype2/klaar',
    component: Klaar_2,
  },
  {
    route: '/prototype2/doelen',
    component: Doelen,
  },
  {
    route: '/prototype2/MijlpaalOverzicht',
    component: MijlpaalOverzicht_2,
  },
  {
    route: '/prototype2/nieuwdoel',
    component: Nieuwdoel,
  },
  {
    route: '/prototype2/instellingen',
    component: I2,
  },
  {
    route: '/prototype2/naresultaat',
    component: NaResultaat_2,
  },
  {
    route: '/prototype2/oefening1',
    component: Oefening1_2,
  },
  {
    route: '/prototype2/oefening2',
    component: Oefening2_2,
  },
  {
    route: '/prototype2/oefening3',
    component: Oefening3_2,
  },
  {
    route: '/prototype2/oefening4',
    component: Oefening4_2,
  },
  {
    route: '/prototype2/oefening5',
    component: Oefening5_2,
  },
  {
    route: '/prototype2/oefening6',
    component: Oefening6_2,
  },
  {
    route: '/prototype2/oefenscherm',
    component: Oefenscherm_2,
  },
  {
    route: '/prototype2/resultaat',
    component: Resultaat_2,
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
    component: MijlpaalOverzicht,
  },
  {
    route: '/prototype/naresultaat',
    component: NaResultaat,
  },
  {
    route: '/prototype/oefening1',
    component: Oefening1,
  },
  {
    route: '/prototype/oefening2',
    component: Oefening2,
  },
  {
    route: '/prototype/oefening3',
    component: Oefening3,
  },
  {
    route: '/prototype/oefening4',
    component: Oefening4,
  },
  {
    route: '/prototype/oefening5',
    component: Oefening5,
  },
  {
    route: '/prototype/oefening6',
    component: Oefening6,
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
