import React from 'react'
import { PrototypePage } from './PrototypingTools';
import {LinearProgress} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const PBar = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      width: '40%',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(LinearProgress);

export const Resultaat = (props) => {
    return <PrototypePage childClass='resultaat'>
        <div className='d-flex flex-column signal-border h-100 justify-content-center align-items-center'>
            <span className='klaar mb-2 '>Klaar!</span>
            <span className='klaar mb-5'>Ga zo door</span>
            <PBar variant="determinate" value={60} />
            <span className='pl-5 pt-1 pr-5 pb-1 signal-border mt-3'>60%</span>
        </div>
    </PrototypePage>
}
