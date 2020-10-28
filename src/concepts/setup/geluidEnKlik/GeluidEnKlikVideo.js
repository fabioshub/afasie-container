import './GeluidEnKlik.scss';
import React, { useState, useEffect, useRef } from 'react';
import Youtube from 'react-youtube';
import {Container} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default () => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <Container ><div className='video-page'>
    <div className='video-part'>
      <Youtube videoId="bypYtNMFamY" opts={opts} />
      <Link to='/concepten/geluid-en-klik' className='link-to-concept'>Door naar het prototype</Link>
    </div>
    <div className='criteria-part scroll1'>
      <div className="criteria">
        <span>Vernieuwend maar toch vertrouwd</span>
        <p>Mensen met afasie zijn gewend
          om tijdens hun behandeling bij 
          de logopedist oefeningen met 
          spraak te doen. Deze oefening
          lijkt enigszins op die oefeningen
          met een twist, waardoor ze wel 
          zelfstandig kunnen oefenen, 
          terwijl de oefening wel innoverend
          is.
        </p>
      </div>
      <div className="criteria">
        <span>Rustige omgeving</span>
        <p>Er gebeurt niet heel veel
          tegelijk op het scherm, waardoor
          de oefening niet te ingewikkeld 
          lijkt en dus niet voor verwarring
          kan zorgen.
        </p>
      </div>
      <div className="criteria">
        <span>Toegankelijkheid</span>
        <p>Deze oefening is vrij Toegankelijk.
          Het enige dat de gebruiker moet doen
          is gebruik maken van de spatiebalk. 
          De gebruiker hoeft alleen mee te doen
          met het uitspreken van de woorden.
        </p>
      </div>
      <div className="criteria">
        <span>Tone of voice</span>
        <p>De gebruiker wordt aangemoedigd
          als hij de applicatie goed gebruikt
          door de randen om de lettergrepen 
          die groen worden als er op de spatiebalk
          gedrukt wordt. Als het woord afgerond is
          kan er een bericht weergegeven worden
          dat de oefening voltooid is.
        </p>
      </div>
    </div>
    <p></p>

  </div></ Container >
}