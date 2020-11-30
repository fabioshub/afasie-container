import React, { useState, useEffect } from 'react'
import { PrototypePage } from './PrototypingTools';
import { LinearProgress, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { oefeningen as allOefeningen } from './Oefenscherm'
import { getItem } from '../Storage';
import {useHistory} from 'react-router-dom'

const PBar = withStyles({
  root: {
    background: '#F6F6F6',
    borderRadius: 3,
    border: 0,
    width: '40%',
    color: '#F49445',
    height: 48,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(LinearProgress);

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

  return <PrototypePage childClass='resultaat'>
    <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
      <span className='klaar mb-1'>Klaar!</span>
      <span className='klaar mb-5 font-weight-bold'>Ga zo door</span>
      <PBar className='progress-bar' variant="determinate" color='primary' value={+(doneAmount * 100 / allOefeningen.length)} />
      <span className='mt-3 btn-small-text'>{`${(doneAmount * 100 / allOefeningen.length) === 100 ? (doneAmount * 100 / allOefeningen.length) : (doneAmount * 100 / allOefeningen.length).toPrecision(2)}%`}</span>
      <span className='btn-default-text mt-5 pointer' onClick={() => history.push({pathname: '/prototype/naresultaat', search: history.location.search})}>Door naar plant</span>
    </div>
  </PrototypePage>
}
