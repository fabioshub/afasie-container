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

export const Nieuwdoel = (props) => {
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
    return <PrototypePage childClass='home'  style={{overflowY:'auto', overflowX: 'hidden', paddingBottom: '100px'}}>
        <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'><span style={{position:'relative', top: '1px'}}>Home</span> <img src='/icons/Home-active.png' style={{ maxWidth: '50px', maxHeight: '50px' }} /> </a>
        </PrototypeHeader>
        <div className='d-flex flex-column h-100' style={{}}>
            <div style={{fontSize: '30px', fontWeight: '700'}} className='d-flex flex-row'>
                <span style={{marginLeft: '40px', marginTop: '50px'}}>Doel maken</span>
                <span style={{marginLeft: '380px', marginTop: '50px'}}>Doel kiezen</span>
            </div>
            <div className='d-flex flex-row' style={{marginLeft: '40px'}}>
                <div style={{marginTop: '25px'}}>
                    <span style={{fontSize: '30px'}}>Naam</span>
                    <div style={{paddingLeft: '10px', backgroundColor: 'white', width: '500px', height: '50px', border: '2px solid #7FBCC6', marginTop: '10px'}}></div>
                </div>
                <a href='/prototype2/doelen' className='default-text-header-button' style={{maxwidth: '200px', maxHeight: '50px', marginLeft: '50px', marginTop: '78px'}}>Overzicht doelen<img src='/icons/Pijl.png' style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: '5px' }}/></a>
            </div>
            <div style={{marginLeft: '40px', marginTop: '40px'}}>
                <span style={{fontSize: '30px', marginTop: '20px'}}>Duur</span>
                <div style={{fontSize: '25px', marginTop: '10px'}} className='d-flex flex-row'>
                    <div>
                        <span>Week</span>
                        <div style={{paddingLeft: '10px', backgroundColor: 'white', width: '110px', height: '40px', border: '2px solid #7FBCC6'}}>....</div>
                    </div>
                    <div style={{marginLeft: '60px'}}>
                        <span>Dag</span>
                        <div style={{paddingLeft: '10px', backgroundColor: 'white', width: '110px', height: '40px', border: '2px solid #7FBCC6'}}>....</div>
                    </div>
                </div>
            </div>
            <div style={{marginLeft: '40px', marginTop: '50px'}}>
                <span style={{fontSize: '30px'}}>Beschrijving</span>
                <div style={{paddingLeft: '10px', width: '500px', height: '300px', backgroundColor: 'white', border: '2px solid #7FBCC6'}}></div>
                <span className='default-text-header-button' style={{margin: '30px 0', padding: '0 20px 0 30px', width: 'min-content'}}>Opslaan<img src='/icons/Pijl.png' style={{ maxWidth: '50px', maxHeight: '50px', marginLeft: '5px' }}/></span>
            </div>
        </div>
    </PrototypePage>
}
