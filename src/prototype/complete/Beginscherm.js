import React from 'react'
import { Button, PrototypePage } from './PrototypingTools';
import zonnebloem from '../sprites/planten/zonnebloem.gif'
import { Link } from 'react-router-dom';

export const Beginscherm = (props) => {
    return <PrototypePage childClass='beginscherm'>
        <div className='d-flex h-100 justify-content-around align-items-center signal-border'>
            <div className='d-flex flex-column'>
                <span className='signal-border p-3 default-text'>Goedendag!</span>
                <Link to='/prototype/oefenscherm'><Button className='mt-3 btn-small-text'>Oefenen</Button></Link>
            </div>
            <img src={zonnebloem} className='zonnebloem signal-border' />
        </div>
    </PrototypePage>
}
