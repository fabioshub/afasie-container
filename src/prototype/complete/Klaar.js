import React from 'react'
import { PrototypePage, Button } from './PrototypingTools';
import {useHistory} from 'react-router-dom'

export const Klaar = (props) => {
    const history = useHistory();

    return <PrototypePage childClass='klaar'>
        <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
            <span className='klaar mb-2 '>De test is klaar</span>
            <span className='klaar mb-5'>Bedankt!</span>
            <div className='d-flex flex-column align-items-center align-items-center'>
            <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfDMY0ar78532S20pZV0iE10JtPnYUQcNz8sGU3oi1QVKOhwg/viewform?usp=sf_link'><Button className='pbtn'>Naar vragen beantwoorden</Button></a>
            <Button onClick={() => history.push('/prototype')} className='btn-small-text mt-5'>Terug naar begin</Button>
            <Button onClick={() => {localStorage.removeItem('storage'); history.push('/prototype')}} className='btn-small-text mt-2'>Voortgang wissen en terug naar begin</Button>

            </div>
        </div>
    </PrototypePage>
}
