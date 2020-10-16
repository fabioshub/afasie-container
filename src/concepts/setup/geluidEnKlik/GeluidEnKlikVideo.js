import './GeluidEnKlik.scss';
import React, { useState, useEffect, useRef } from 'react';
import Youtube from 'react-youtube';
import { Link } from 'react-router-dom';

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

        <div><div className='uitleg-video'>Uitleg video</div><br /><Youtube videoId="bypYtNMFamY" opts={opts}/></div>
        <Link to='/concepten/geluid-en-klik' className='link-to-concept'>Door naar het prototype</Link>
    </div>
}