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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { PrototypeHeader } from '../complete2/PrototypingTools';

export const Doelen = (props) => {
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
        <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'><span style={{position:'relative', top: '1px'}}>Home</span> <img src='/icons/Home-active.png' style={{ maxWidth: '50px', maxHeight: '50px' }} /> </a>
            <a href='/prototype2/nieuwdoel' className='default-text-header-button'>Nieuw doel <img src='/icons/Doelen.png' style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: '8px' }} /></a>
        </PrototypeHeader>
        <div className='d-flex h-100' style={{overflow:'hidden'}}>
            <div className='d-flex flex-column w-100 pl-5' style={{marginTop: '100px'}}>
                <span className='title-text'>Doel</span>
                <span style={{fontSize: '40px'}}>Luistervaardigheid verbeteren</span>
                <Button onClick={onClickAnalytics(() => history.push(`/prototype2/oefenscherm`), 'Oefenscherm')} className='mt-3 btn-default-text'><span>Oefenen</span><img style={{maxWidth: '40px', height: '40px', marginLeft: '10px'}} src='/icons/Pijl.png'/></Button>
            </div>
            <div className=' h-100 p-5 d-flex align-items-end'>
                <img style={{position: 'relative', bottom: '60px'}} src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * ((getItem('currentDoelPercentage') || 0)  / 100))]} className='downscale zonnebloem'/>
            </div>
        </div>
    </PrototypePage>
}
