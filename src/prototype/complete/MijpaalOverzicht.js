import React, { useState, useEffect } from 'react'
import { PrototypePage } from './PrototypingTools'
import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {zonnebloemImages} from './NaResultaat';
import { oefeningen as allOefeningen } from './Oefenscherm';
import { getItem } from '../Storage'
import zonnebloemKlein from '../sprites/planten/zonnebloem1.png';
import zonnebloemMiddel from '../sprites/planten/zonnebloem3.png';
import zonnebloemGroot from '../sprites/planten/zonnebloem5.png';
import {useHistory} from 'react-router-dom'
import { onClickAnalytics } from '../../Analytics';

const PBar = withStyles({
    root: {
        background: '#F6F6F6',
        borderRadius: 3,
        border: 0,
        width: '100%',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(LinearProgress);

export const MijlpaalOverzicht = (props) => {
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
    console.log(Math.ceil((zonnebloemImages.length - 1) * ((getItem('currentDoelPercentage') || 0) / 10 / zonnebloemImages.length)), zonnebloemImages)
    return <PrototypePage childClass='mijlpaaloverzicht'>
        <div className=' h-100 d-flex flex-column mb-3'>
            <div className='w-100 d-flex justify-content-end pr-4'><span className='btn-small-text pointer' onClick={onClickAnalytics(() => history.push('/prototype/klaar'), 'Klaar')}>Volgende</span></div>
            <div className='d-flex w-100 p-4'>
                <div className='d-flex w-100 align-items-center p-4 bg-lightblue'>
                    <div className='mr-3' style={{ height: '300px', width: '400px' }}>
                    <img src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * ((getItem('currentDoelPercentage') || 0) / 10 / zonnebloemImages.length))]} style={{maxWidth: '100%', maxHeight: '100%'}} />
                    </div>
                    <div className='d-flex flex-column w-100 p-3 h-100 justify-content-around'>
                        <span className='title-text'>Mijlpaal ...</span>
                        <PBar variant="determinate" value={(getItem('currentDoelPercentage') || 0) } />
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-around'>
                    <div className='d-flex align-items-center flex-column'><img src={zonnebloemMiddel} className='placeholder'></img><PBar variant="determinate" color='secondary' value={50} /></div>
                    <div className='d-flex align-items-center flex-column'><img src={zonnebloemGroot} className='placeholder'></img><PBar variant="determinate" color='secondary' value={100} /></div>
                    <div className='d-flex align-items-center flex-column'><img src={zonnebloemKlein} className='placeholder'></img><PBar variant="determinate" color='secondary' value={0} /></div>
                </div>
            </div>
        </div>
    </PrototypePage>
}
