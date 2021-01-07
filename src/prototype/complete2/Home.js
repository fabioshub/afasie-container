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
import { useHistory } from 'react-router-dom';
import {PrototypeHeader} from './PrototypingTools';
import HomeIcon from '@material-ui/icons/Home';

const menuItems1 = [
    {
        label: 'Oefeningen',
        link: 'oefenscherm',
        icon: '/icons/Oefenen.png'
    },
    {
        label: 'Mijn plant',
        link: 'mijlpaaloverzicht',
        icon: '/icons/Mijn-plant.png'
    }
]
const menuItems2 = [
    {
        label: 'Doelen',
        link: 'doelen',
        icon: '/icons/Doelen.png'
    },
    {
        label: 'Instellingen',
        link: 'home',
        icon: '/icons/Instellingen.png'
    },
]
export const Home = (props) => {
    const history = useHistory();

    return <PrototypePage childClass='home' style={{background: 'rgb(234,245,241)'}}>
        <PrototypeHeader>
            <span className='default-text-header'>Home <img src='/icons/Home-inactive.png' style={{maxWidth: '50px', maxHeight: '50px'}} /> </span>
        </PrototypeHeader>
        <div className='h-100 d-flex flex-column w-100 justify-content-center align-items-center'>
            <div className='w-100 d-flex justify-content-center mb-4'>
            {
                menuItems1.map(item => {
                    return <div className='home-item d-flex flex-column align-items-center justify-content-around pb-2 mr-4 ml-4 pointer' style={{backgroundColor: 'white', width: '280px', height: '230px', border: '3px', borderStyle: 'solid', borderColor: '#7FBCC6', boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.274)'}} onClick={onClickAnalytics(() => history.push(`/prototype2/${item.link}`), item.label)}>        
                        <span className='mt-3 default-text'>{item.label}</span>
                        <img src={item.icon}/>
                    </div>
                })
            }
            </div>
            
            <div className='w-100 d-flex justify-content-center mt-4'>
            {
                menuItems2.map(item => {
                    return <div className='home-item d-flex flex-column align-items-center justify-content-around pb-2 mr-4 ml-4 pointer' style={{backgroundColor: 'white', width: '280px', height: '230px', border: '3px', borderStyle: 'solid', borderColor: '#7FBCC6', boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.274)'}} onClick={onClickAnalytics(() => history.push(`/prototype2/${item.link}`), item.label)}>        
                        <span className='mt-3 default-text'>{item.label}</span>
                        <img src={item.icon}/>
                    </div>
                })
            }
            </div>
        </div>
    </PrototypePage>
}
