import React from 'react'
import { PrototypePage, Button } from './PrototypingTools';

export const Klaar = (props) => {
    return <PrototypePage childClass='klaar'>
        <div className='d-flex flex-column signal-border h-100 justify-content-center align-items-center'>
            <span className='klaar mb-2 '>De test is klaar</span>
            <span className='klaar mb-5'>Bedankt!</span>
            <Button className='pbtn'>Vragen</Button>
        </div>
    </PrototypePage>
}
