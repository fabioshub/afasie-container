import React from 'react'
import { PrototypePage, Button } from './PrototypingTools';
import {useHistory} from 'react-router-dom'
import { onClickAnalytics } from '../../Analytics';
export const Klaar = (props) => {
    const history = useHistory();

    const getRightForm = () => {
        if (localStorage.getItem('userType') && localStorage.getItem('userType') === 'inf'){
            console.log('run inf link')
            return 'https://forms.gle/CYbUqFP3Fs9DBoHC6';
        }
        else if (localStorage.getItem('userType') && localStorage.getItem('userType') === 'studenten'){
            return 'https://forms.gle/kweZZ6mVzKDXjxJZ9';
        }
        else {
            console.log('run normal people link')
            return 'https://docs.google.com/forms/d/e/1FAIpQLSfDMY0ar78532S20pZV0iE10JtPnYUQcNz8sGU3oi1QVKOhwg/viewform?usp=sf_link'
        }
    }

    return <PrototypePage childClass='klaar'>
        <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
            <span className='klaar mb-2 '>De test is klaar</span>
            <span className='klaar mb-5'>Bedankt!</span>
            <div className='d-flex flex-column align-items-center align-items-center'>
            <a target='_blank' href={getRightForm()}><Button onClick={onClickAnalytics(() => {}, 'Vragen formulier')} className='pbtn'>Naar vragen beantwoorden</Button></a>
            <Button onClick={onClickAnalytics(() => history.push('/prototype'), 'Terug naar begin')} className='btn-small-text mt-5'>Terug naar begin</Button>
            <Button onClick={onClickAnalytics(() => {localStorage.removeItem('storage'); history.push('/prototype')}, 'Voortgang wissen')} className='btn-small-text mt-2'>Voortgang wissen en terug naar begin</Button>

            </div>
        </div>
    </PrototypePage>
}
