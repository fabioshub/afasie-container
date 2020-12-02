import React from 'react'
import { PrototypePage, Button } from './PrototypingTools';
import {useHistory} from 'react-router-dom'
import { onClickAnalytics } from '../../Analytics';
export const Klaar = (props) => {
    const history = useHistory();

    return <PrototypePage childClass='klaar'>
        <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
            <span className='klaar mb-2 '>De test is klaar</span>
            <span className='klaar mb-5'>Bedankt!</span>
            <div className='d-flex flex-column align-items-center align-items-center'>
            <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfDMY0ar78532S20pZV0iE10JtPnYUQcNz8sGU3oi1QVKOhwg/viewform?usp=sf_link'><Button onClick={onClickAnalytics(() => {}, 'Vragen formulier')} className='pbtn'>Naar vragen beantwoorden</Button></a>
            <Button onClick={onClickAnalytics(() => history.push('/prototype'), 'Terug naar begin')} className='btn-small-text mt-5'>Terug naar begin</Button>
            <Button onClick={onClickAnalytics(() => {localStorage.removeItem('storage'); history.push('/prototype')}, 'Voortgang wissen')} className='btn-small-text mt-2'>Voortgang wissen en terug naar begin</Button>

            </div>
        </div>
    </PrototypePage>
}
