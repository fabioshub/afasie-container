import './Gevoel.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {Container} from '@material-ui/core';
import Youtube from 'react-youtube';

export default () => {
  const opts = {
    height: '360',
    width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0
    },
  };

  return <Container><div className='video-page'>
    <div className='video-part'>
        <Youtube videoId="bed3ZWgYPCQ" opts={opts} />
  <Link to='/concepten/gevoel' className='link-to-concept'>Door naar het prototype</Link>
      </div>
    <div className='criteria-part scroll1'>
      <div className="criteria">
        <span>Vertrouwd maar toch vernieuwend</span>
        <p>Dit concept is vertrouwd omdat patiënten
          nog steeds dezelfde oefeningen maken zoals 
          ze gewend zijn.Dit concept is vernieuwend, omdat
          er bij huidige oefeningen bij een
          logopedist niet echt gelet wordt
          op emotionele staat van een patiënt.
        </p>
      </div>
      <div className="criteria">
        <span>Rustige omgeving</span>
        <p>De layout van de applicatie is
          simpel en rustig, waardoor er weinig
          prikkels zijn die de gebruiker zouden
          kunnen afleiden.
        </p>
      </div>
      <div className="criteria">
        <span>Toegankelijkheid</span>
        <p>Dit concept is toegankelijk voor
          iedereen, omdat de oefeningen die
          gebruikers moeten maken aangepast
          zijn naar hun gemoedstoestand. 
        </p>
      </div>
      <div className="criteria">
        <span>Tone of voice</span>
        <p>Bij dit concept willen we zorgen
          dat de succeservaring zo hoog 
          mogelijk blijft, ongeacht de 
          emotionele staat van de gebruiker.
        </p>
      </div>
      <div className="criteria">
        <span>Gemoedstoestand</span>
        <p>De gemoedstoestand van de gebruiker
          is de basis voor dit concept. De
          oefeningen zullen op basis van de 
          keuze van de gebruiker worden aangepast.
        </p>
      </div>
    </div>
  </div>

  </Container>
}