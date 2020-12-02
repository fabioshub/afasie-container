import React, { useState, useEffect } from 'react'
import Speech from 'react-speech';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button, PrototypePage } from './PrototypingTools';
import plantje from '../sprites/planten/zonnebloem1.png';
import { Link } from 'react-router-dom';
import {zonnebloemImages} from './NaResultaat';
import { oefeningen as allOefeningen } from './Oefenscherm';
import { getItem } from '../Storage';
import { onClickAnalytics } from '../../Analytics';
import { useHistory } from 'react-router-dom'

export const Beginscherm = (props) => {
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
    return <PrototypePage childClass='beginscherm'>
        <div className='d-flex h-100 center align-items-center'>
            <div className='d-flex flex-column w-100 pl-5'>
                <span className='title-text pb-3'>Goedendag!</span>
                <Button onClick={onClickAnalytics(() => history.push(`/prototype/oefenscherm`), 'Oefenscherm')} className='mt-3 btn-small-text'>Oefenen</Button>
            </div>
            <div className=' h-100 p-5 bg-lightblue d-flex align-items-center'>
                <img src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * (doneAmount / allOefeningen.length))]} className='zonnebloem'/>

            </div>
        </div>
    </PrototypePage>
}
