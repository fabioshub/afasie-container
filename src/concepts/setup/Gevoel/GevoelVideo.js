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
        <div>Uitleg video<Youtube videoId="bed3ZWgYPCQ" opts={opts}/></div>
        <Link to='/concepten/gevoel'  className='link-to-concept'>Door naar het prototype</Link>
    </div>
}