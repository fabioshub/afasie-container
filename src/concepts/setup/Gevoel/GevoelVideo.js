import './Gevoel.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'react-youtube';

export default () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return <div className='video-page'>
        <Youtube videoId="n2Be7J1u8pA" opts={opts}/>
        <Link to='/concepten/gevoel'  className='link-to-concept'>Door naar het prototype</Link>
    </div>
}