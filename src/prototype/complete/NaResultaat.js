import React, { useState, useEffect } from 'react'
import { Button, PrototypePage } from './PrototypingTools';
import {useLocation} from 'react-router-dom'
import zonnebloem from '../sprites/planten/zonnebloem.gif';
import zonnebloem1 from '../sprites/planten/zonnebloem1.png';
import zonnebloem2 from '../sprites/planten/zonnebloem2.png';
import zonnebloem3 from '../sprites/planten/zonnebloem3.png';
import zonnebloem4 from '../sprites/planten/zonnebloem4.png';
import zonnebloem5 from '../sprites/planten/zonnebloem5.png';
import { getItem } from '../Storage'
import { oefeningen as allOefeningen } from './Oefenscherm';
import { onClickAnalytics } from '../../Analytics';
import {useHistory} from 'react-router-dom';

export const zonnebloemImages = [zonnebloem, zonnebloem1, zonnebloem2, zonnebloem3, zonnebloem4, zonnebloem5];

export const NaResultaat = (props) => {
    const query = new URLSearchParams(useLocation().search)
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
    return <PrototypePage childClass='naResultaat'>
        <div className='d-flex h-100 justify-content-center align-items-center'>
            <div className='d-flex flex-column w-100 pl-5'>
<span className='title-text pb-3'>{query.get('grown') ? 'Hij is gegroeid!' : 'Blijf oefenen!'}</span>
                <Button onClick={onClickAnalytics(() => history.push('/prototype/mijlpaaloverzicht'), 'Mijlpalenoverzicht')} className='btn-small-text mt-3'>Bekijk ze allemaal</Button>
            </div>
            <div className=' h-100 p-5 bg-lightblue d-flex align-items-center'>
                <img src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * (doneAmount / allOefeningen.length))]} className='zonnebloem' />
            </div>

        </div>
    </PrototypePage>
}
