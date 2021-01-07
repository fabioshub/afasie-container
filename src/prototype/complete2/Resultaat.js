import React, { useState, useEffect } from 'react'
import { PrototypePage, PrototypeHeader } from './PrototypingTools';
import { LinearProgress, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { oefeningen as allOefeningen } from './Oefenscherm'
import { getItem } from '../Storage';
import {useHistory} from 'react-router-dom';
import { onClickAnalytics } from '../../Analytics';

const PBar = withStyles({
  root: {
    background: '#F6F6F6',
    borderRadius: 3,
    border: 0,
    color: '#F49445',
    height: 48,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(LinearProgress);

const MIN = 0;
const MAX = 40;

export const Resultaat = (props) => {
  const [doneAmount, setDoneAmount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const allCount = allOefeningen.length;
    setDoneAmount(allOefeningen.reduce((acc, val) => {
      if (getItem(val.link)) {
        return acc + 1;
      }
      return acc + 0;
    }, 0))
  }, [])

  const normalise = value => (value - MIN) * 100 / (MAX - MIN);

  return <PrototypePage childClass='resultaat'>
            <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'>Home <img src='/icons/Home-active.png' style={{maxWidth: '50px', maxHeight: '50px'}} /> </a>
        </PrototypeHeader>
    <div className='d-flex flex-column h-100 justify-content-center align-items-center mb-5' style={{position: 'relative', top: '15px'}}>
      <div className='d-flex flex-column align-items-center mb-5 mt-5'>
      <span className='klaar mb-1'>Klaar!</span>
      <span className='klaar mb-5 font-weight-bold'>Goed gedaan!</span>
<span className='klaar mt-1'>{getItem('firsttry') || '0'} van de 4 goed</span>
      <PBar className='progress-bar mt-4' variant="determinate"  color='primary' value={getItem('firsttry') ? normalise(+getItem('firsttry') * 10) : 0} />
        </div>
      {/* <span className='mt-3 btn-small-text'>{`${(doneAmount * 100 / allOefeningen.length) === 100 ? (doneAmount * 100 / allOefeningen.length) : (doneAmount * 100 / allOefeningen.length).toPrecision(2)}%`}</span> */}
      <span className='btn-default-text mt-5 pointer' onClick={onClickAnalytics(() => history.push({pathname: '/prototype2/naresultaat', search: history.location.search}), 'NaResultaat')}>Doorgaan <img style={{maxWidth:'45px', height: '45px'}} src='/icons/Pijl.png'/></span>
    </div>
  </PrototypePage>
}
