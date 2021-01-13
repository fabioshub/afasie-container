import React, { useState, useEffect } from 'react'
import Speech from 'react-speech';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button, PrototypePage } from './PrototypingTools';
import plantje from '../sprites/planten/zonnebloem1.png';
import { Link } from 'react-router-dom';
import { zonnebloemImages } from './NaResultaat';
import { oefeningen as allOefeningen } from './Oefenscherm';
import { getItem } from '../Storage';
import { onClickAnalytics } from '../../Analytics';
import { useHistory } from 'react-router-dom';
import { PrototypeHeader } from './PrototypingTools';
import HomeIcon from '@material-ui/icons/Home';

export const Instellingen = (props) => {
    const history = useHistory();
    const [activeSize, setActiveSize] = useState(1);
    const [activeContrast, setActiveContrast] = useState(1);
    const [activeVoorlezen, setActiveVoorlezen] = useState(0);
    const [activeColorToggle, setActiveColorToggle] = useState(0);


    return <PrototypePage childClass='instellingen' style={{ background: 'white' }}>
        <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'><span style={{ position: 'relative', top: '1px' }}>Home</span> <img src='/icons/Home-active.png' style={{ maxWidth: '50px', maxHeight: '50px' }} /> </a>
        </PrototypeHeader>
        <div className='h-100 d-flex flex-column w-100 justify-content-center  ' style={{
            height: '80%',
            background: 'url(/images/AchtergrondInstellingen.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='ml-5 block-holder d-flex' style={{ marginTop: '-90px' }}>
                <div className='block'>
                    <span className='text-def'>Tekst grootte</span>
                    <div className='d-flex justify-content-between align-items-end' style={{ width: '130px' }}>
                        <div style={{ fontSize: '25px', paddingBottom: '13px', borderRadius: '20px', padding: '3px', width: '25px', height: '25px', background: activeSize === 0 ? '#7FBCC6' : 'white', color: '#6a6a6a' }} className='d-flex justify-content-center align-items-center pointer' onClick={() => setActiveSize(0)}>
                            <span>a</span>
                        </div>
                        <div style={{ fontSize: '40px', paddingBottom: '6px', borderRadius: '20px', padding: '3px', width: '35px', height: '35px', background: activeSize === 1 ? '#7FBCC6' : 'white', color: '#6a6a6a' }} className='d-flex justify-content-center align-items-center pointer' onClick={() => setActiveSize(1)}>
                            <span>a</span>
                        </div>
                        <div style={{ fontSize: '55px', borderRadius: '25px', padding: '3px', width: '47px', height: '47px', background: activeSize === 2 ? '#7FBCC6' : 'white', color: '#6a6a6a' }} className='d-flex justify-content-center align-items-center pointer' onClick={() => setActiveSize(2)}>
                            <span>a</span>
                        </div>
                    </div>
                </div>
                <div className='block'>
                    <span className='text-def'>Contrast</span>
                    <div className='d-flex justify-content-between' style={{ width: '100%' }}>
                        <div style={{ fontSize: '28px', borderRadius: '20px', padding: '3px', width: '35px', height: '35px', background: activeContrast === 0 ? '#7FBCC6' : 'white', color: activeContrast === 0 ? 'white' : '#6a6a6a', }} className='d-flex justify-content-center align-items-center pointer' onClick={() => setActiveContrast(0)}>
                            T
                    </div>
                        <div style={{ fontSize: '28px', borderRadius: '20px', padding: '3px', width: '35px', height: '35px', background: activeContrast === 1 ? '#7FBCC6' : 'white', color: activeContrast === 1 ? 'white' : '#6a6a6a', }} className='d-flex justify-content-center align-items-center pointer' onClick={() => setActiveContrast(1)}>
                            T
                    </div>
                    </div>
                </div>
                <div className='block' style={{ height: '115px' }}>
                    <span className='text-def'>Voorlezen</span>
                    <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                        <div style={{  minHeight: '60px', maxWidth: '60px', maxHeight: '60px', overflow: 'hidden' }} className='pointer' onClick={() => setActiveVoorlezen(prev => prev === 1 ? 0 : 1)}>
                            
                            {
                                activeVoorlezen === 0 ? <img src='/icons/Sound.png' style={{ maxWidth: '60px', maxHeight: '60px' }} />
                                    :
                                    <img src='/icons/SoundOff.png' style={{ maxWidth: '60px', maxHeight: '60px' }} />
                            }
                        </div>
                    </div>
                </div>
                <div className='block' style={{ height: '118px' }}>
                    <span className='text-def'>Kleuren</span>
                    <div className=''>
                        <div style={{minHeight: '60px', maxWidth: '80px', maxHeight: '60px', overflow: 'hidden' }} className='pointer' onClick={() => setActiveColorToggle(prev => prev === 1 ? 0 : 1)}>
                            {
                                activeColorToggle === 1 ? <img src='/icons/SwitchOff.png' style={{ maxWidth: '80px', maxHeight: '60px' }} />
                                    :
                                    <img src='/icons/SwitchOn.png' style={{ maxWidth: '80px', maxHeight: '60px' }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between ml-4' style={{ width: '300px', marginTop: '70px' }}>
                <div className='d-flex flex-column align-items-center m-4 pointer' >
                    <div className='d-flex justify-content-end' style={{ height: '110px', width: '190px', border: '1px solid #6a6a6a' }}>
                        <div style={{ height: '100%', width: '33%', background: '#6a6a6a' }}>

                        </div>
                    </div>
                    <span className='text-def mt-2'>Links layout</span>
                </div>
                <div className='d-flex flex-column align-items-center m-4 pointer'>
                    <div className='d-flex justify-content-end' style={{ height: '110px', width: '190px', border: '1px solid #6a6a6a' }}>
                    </div>
                    <span className='text-def mt-2'>Midden layout</span>

                </div>
                <div className='d-flex flex-column align-items-center m-4 pointer'>
                    <div className='d-flex' style={{ height: '110px', width: '190px', border: '1px solid #6a6a6a' }}>
                        <div style={{ height: '100%', width: '33%', background: '#6a6a6a' }}>

                        </div>
                    </div>
                    <span className='text-def mt-2'>Recht layout</span>

                </div>
            </div>
        </div>
    </PrototypePage>
}
