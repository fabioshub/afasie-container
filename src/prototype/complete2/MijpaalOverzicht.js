import React, { useState, useEffect } from 'react'
import { PrototypePage, PrototypeHeader } from './PrototypingTools'
import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { zonnebloemImages } from './NaResultaat';
import { oefeningen as allOefeningen } from './Oefenscherm';
import { getItem } from '../Storage'
import zonnebloemKlein from '../sprites/planten/Plant0.png';
import zonnebloemMiddel from '../sprites/planten/Plant2.png';
import zonnebloemGroot from '../sprites/planten/Plant4.png';
import { useHistory } from 'react-router-dom'
import { onClickAnalytics } from '../../Analytics';

const PBar1 = withStyles({
    root: {
        background: '#F6F6F6',
        borderRadius: 3,
        border: 0,
        width: '100%',
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.274)'
    },
    label: {
        textTransform: 'capitalize',
    },
})(LinearProgress);

const PBar2 = withStyles({
    root: {
        background: '#F6F6F6',
        border: 0,
        width: '100%',
        color: 'white',
        height: 30,
        padding: '0 30px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(LinearProgress);

const mijlpalen = [
    zonnebloemGroot,
    zonnebloemGroot,
    zonnebloemGroot,
    zonnebloemGroot
]

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
    return <PrototypePage childClass='mijlpaaloverzicht' style={{ background: 'rgb(234,245,241)' }}>
        <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'><span style={{position:'relative', top: '1px'}}>Home</span> <img src='/icons/Home-active.png' style={{ maxWidth: '50px', maxHeight: '50px' }} /> </a>
        </PrototypeHeader>
        <div className=' h-100 d-flex flex-column'>
            <div className='d-flex flex-column' style={{height: '90vh'}}>
            <div className='d-flex w-100 p-4' style={{
                height: '80%',
                background: 'url(/images/Achtergrond-klein.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='d-flex w-100 align-items-center p-4'>
                    <div className='d-flex flex-column p-3 h-100 w-100'>
                        <span className='title-text'>Doel</span>
                        {/* huidig doel programmeren */}
                        <span className='normal-big-text'>Luistervaardigheid</span>
                        <span className='normal-big-text mb-4'>Verbeteren</span>
                        <PBar1 variant="determinate" value={getItem('currentDoelPercentage') || 0} />
                    </div>
                    <div className='mr-3 h-100 d-flex align-items-end pb-3' style={{width: '600px'}}>
                        <img className='downscale' src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * ((getItem('currentDoelPercentage') || 0) / 100))]} style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '20px' }} />
                    </div>
                </div>
            </div>
            <div className='default-text-header-button inter-section ' style={{height: '15%'}}>
                <span>Behaald <img src='/icons/Pijl.png' style={{ maxHeight: '40px', maxWidth: '40px', transform: 'rotate(90deg)'}}/></span>
            </div>
            </div>
            <div>
                <div className='d-flex justify-content-around flex-wrap pr-5 pl-5 pt-4' style={{backgroundColor: 'rgb(234,245,241)'}}>
                    {
                        mijlpalen.map(m => {
                            return <div className='d-flex align-items-center flex-column p-5' style={{flex: '0 50%'}}>
                                <div style={{backgroundColor: 'white', width: '280px', height: '400px'}} className='d-flex flex-column align-items-center justify-content-between'>
                                    <div className='d-flex flex-column align-items-center justify-content-center mt-4' style={{fontSize: '17px'}}>
                                        <span style={{fontWeight: 'bold'}}>Doel</span>
                                        <span>Luistervaardigheid </span>
                                        <span>verbeteren</span>
                                        </div>
                                <img src={m} className='downscale placeholder'></img>
                                <div className='d-flex w-100' style={{position:'relative'}}>
                                <span className='font-weight-bold w-100 h-100 d-flex justify-content-center align-items-center' style={{color: 'white', position:'absolute', top: '0', left: '0', zIndex: '10000'}}>100%</span>

                                <PBar2 variant="determinate" color='secondary' value={100} style={{width: '100%'}} />
                                <div>
                                    </div>
                                </div>
                                </div>
                                </div>
                        })
                    }
                </div>
            </div>
        </div>
    </PrototypePage>
}
