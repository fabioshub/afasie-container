import './Mijlpaal.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'react-youtube';
import {Container} from '@material-ui/core';


export default () => {
    const opts = {
        height: '360',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return <Container><div className='video-page'>
        <div className='video-part'>
          <Youtube videoId="3HKihjb35V8" opts={opts}/>
          <Link to='/concepten/mijlpaal' className='link-to-concept'>Door naar het prototype</Link>
          </div>
        <div className='criteria-part scroll1'>
      <div className="criteria">
        <span>Vertrouwd maar toch vernieuwend</span>
        <p>Dit concept is vertrouwd, omdat 
          patiënten tijdens het trajec bij
          een logopedist ook doelen opstellen.
          Bij het zelfstandig oefeningen maken
          gebeurt dit nog niet, daarom is dit Vernieuwend.
        </p>
      </div>
      <div className="criteria">
        <span>Rustige omgeving</span>
        <p>De applicatie kan bij dit concept
          erg eenvoudig worden weergegeven. Ingewikkelde
          visualisaties die normaal gesproken in 
          andere applicaties zitten kunnen hierdoor
          uitblijven.
        </p>
      </div>
      <div className="criteria">
        <span>Toegankelijkheid</span>
        <p>Gebruikers hebben verschillende
          vormen van afasie en daarbij ook 
          verschillende doelen die ze willen
          behalen. Bij dit concept kan iedereen
          zijn eigen doelen opstellen.
        </p>
      </div>
      <div className="criteria">
        <span>Tone of voice</span>
        <p>Bij dit concept spelen we heel erg
          in op het zelfvertrouwen van de gebruiker.
          De gebruiker wordt op een motiverende wijze
          aangemoedigd om zijn mijlpalen te behalen.
        </p>
      </div>
      <div className="criteria">
        <span>Gemoedstoestand</span>
        <p>We houden er rekening mee dat de
          applicatie niet te demotiverend werkt
          wanneer mijlpalen niet of moeizaam
          gehaald worden.
        </p>
      </div>
    </div>
    </div>
    </Container>
}