import './GeluidEnKlik.scss';
import React, { useState, useEffect, useRef } from 'react';
import Youtube from 'react-youtube';
import {Container} from '@material-ui/core';
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

  return <Container ><div className='video-page'>
    <div className='video-part'>
      <div className='uitleg-video'>Uitleg video</div>
      <br />
      <Youtube videoId="bypYtNMFamY" opts={opts} />
      <Link to='/concepten/geluid-en-klik' className='link-to-concept'>Door naar het prototype</Link>
    </div>
    <div className='criteria-part'>
      <div className="criteria">
        <span>Vernieuwend maar toch vertrouwd</span>
        <p>We moeten voorzichtig zijn met
        het introduceren van nieuwe
        technologieën aan de
        patiënten. Het is belangrijk om
        origineel in innovatief te zijn,
        maar het moet nog wel
        aansluiten met de bekende
        behandeling die ze kregen van
        de logopedist omdat het
        anders als onbekend terrein
kan worden ervaren.</p>
      </div>
      <div className="criteria">
        <span>Rustige omgeving</span>
        <p>Er moet rekening gehouden
        worden met het feit dat PMA
        niet goed tegen te veel prikkels
        kunnen. Daarom is het nodig
        de UI zo rustig en simpel
        mogelijk te houden. Ook is
        daarbij belangrijk zo veel
        mogelijk onnodige stappen uit
        het systeem te houden. De
        leeromgeving hee dus een
        rustig en simplistisch ontwerp,
        waar geen onnodige stappen in
voorkomen.</p>
      </div>
      <div className="criteria">
        <span>Toegankelijkheid</span>
        <p>Er is veelzijdigheid in de
        soorten afasie, bijkomende
        beperkingen en de type
        afasiepatiënten. Voor iedere
        afasiepatiënt werkt iets anders.
        Het is belangrijk dat de
        oefentool gemakkelijk in
        gebruik is, zodat het
        bijvoorbeeld ook toegankelijk
        is voor digibeten. Ook is het
        belangrijk dat er verschil zit in
        de moeilijkheidsgraad van
        oefeningen. Tot slot is het
        gewenst dat er rekening
        gehouden wordt met
        bijkomende beperkingen, zoals
        visuele beperkingen of fysieke
beperkingen.</p>
      </div>
      <div className="criteria">
        <span>Tone of voice</span>
        <p>Het is belangrijk dat er goed
        ingespeeld wordt op het
        zelfvertrouwen van de
        afasiepatiënt. Hierbij is het
        noodzakelijk dat de
        afasiepatiënt op een volwassen
        manier benaderd wordt. Ook is
        het belangrijk dat fouten niet
        worden afgestra, maar dat de
        afasiepatiënt juist op een
        motiverende wijze wordt
        aangesproken en dat
        succeservaringen extra
        uitgelicht worden. Het oefenen
        moet als fijn worden ervaren,
        daarom zit er ook geen
tijdslimiet op de oefeningen.</p>
      </div>
      <div className="criteria">
        <span>Gemoedstoestand</span>
        <p>Voordat de afasiepatiënt begint
        met het oefenen, is het
        belangrijk dat de
        gemoedstoestand van de
        afasiepatiënt wordt ingeschat.
        Als de afasiepatiënt zich op een
        dag minder goed voelt, wordt
        er op een motiverende wijze
        aangesproken en worden de
        oefeningen (eventueel)
        makkelijker en leuker gemaakt.
        Voelt de afasiepatiënt zich op
        een dag wel goed, dan kan hij
        de normale of zelfs moeilijkere
oefeningen doen.</p>
      </div>
    </div>
    <p></p>

  </div></ Container >
}