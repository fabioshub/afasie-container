import React, { useState, useEffect } from 'react'
import { Button, PrototypePage, PrototypeHeader } from './PrototypingTools';
import { useLocation } from 'react-router-dom'
import zonnebloem from '../sprites/planten/zonnebloem.gif';
import zonnebloem1 from '../sprites/planten/Plant0.png';
import zonnebloem2 from '../sprites/planten/Plant1.png';
import zonnebloem3 from '../sprites/planten/Plant2.png';
import zonnebloem4 from '../sprites/planten/Plant3.png';
import zonnebloem5 from '../sprites/planten/Plant4.png';
import { getItem } from '../Storage'
import { oefeningen as allOefeningen } from './Oefenscherm';
import { onClickAnalytics } from '../../Analytics';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'

export const zonnebloemImages = [zonnebloem1, zonnebloem2, zonnebloem3, zonnebloem4, zonnebloem5];

const animations = {
    in: {
        transition: { duration: 10 },
        opacity: 1,
        display: 'block',
    },
    out: {
        transition: { duration: 10 },
        display: 'none',
        opacity: 0,
    },
}

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
        <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'><span style={{ position: 'relative', top: '1px' }}>Home</span> <img src='/icons/Home-active.png' style={{ maxWidth: '50px', maxHeight: '50px' }} /> </a>
        </PrototypeHeader>
        <div className='d-flex h-100 justify-content-center align-items-center'>
            <div className='d-flex flex-column w-100 pl-5' style={{ position: 'relative', bottom: '60px' }} >
                <span className='title-text pb-4'>{query.get('grown') ? 'De plant is gegroeid!' : 'Blijf oefenen!'}</span>
                <Button onClick={onClickAnalytics(() => history.push('/prototype2/oefenscherm'), 'Mijlpalenoverzicht')} className='btn-small-text mt-3 pr-4 pl-4 pt-1 pb-1'>Verder oefenen</Button>
            </div>
            <div className=' h-100 p-5 d-flex align-items-end' style={{ position: 'relative', width: '600px' }}>
                {
                    getItem('currentDoelPercentage') && <>
                        <motion.div style={{ position: 'absolute', bottom: '60px', left: '0' }} initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: 2, delay: 1.5 } }}><img src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * ((getItem('currentDoelPercentage') || 0) / 100)) - 1]} className='downscale zonnebloem' /></motion.div>
                        <motion.div style={{ position: 'absolute', bottom: '60px', left: '0' }} initial={{ opacity: 0 }} animate={{ opacity: 1, display: 'block', transition: { duration: 2, delay: 1.5 } }}><img src={zonnebloemImages[Math.ceil((zonnebloemImages.length - 1) * ((getItem('currentDoelPercentage') || 0) / 100))]} className='downscale zonnebloem' /></motion.div>
                    </>
                }
            </div>

        </div>
    </PrototypePage>
}
