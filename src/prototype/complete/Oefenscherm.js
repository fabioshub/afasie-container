import React from 'react'
import { useHistory } from 'react-router-dom'
import { onClickAnalytics } from '../../Analytics'
import { PrototypePage } from './PrototypingTools'

export const oefeningen = [
    {
        label: 'Opdracht 1',
        link: 'oefening1',
    },
    {
        label: 'Opdracht 2',
        link: 'oefening2',
    },
    {
        label: 'Opdracht 3',
        link: 'oefening3',
    },
    {
        label: 'Opdracht 4',
        link: 'oefening4',
    },
    {
        label: 'Opdracht 5',
        link: 'oefening5',
    },
    {
        label: 'Opdracht 6',
        link: 'oefening6',
    },
]

export const Oefenscherm = (props) => {
    const history = useHistory();

    return <PrototypePage childClass='oefenscherm'>
        <div className='h-100 d-flex flex-wrap justify-content-around align-items-center'>
            {
                oefeningen.map(oefening => {
                    return <div className='opdracht d-flex flex-column align-items-center' onClick={onClickAnalytics(() => history.push(`/prototype/${oefening.link}`), oefening.label)}>        
                        <div className='bg-grey rectangle d-flex justify-content-center' />
                        <span className='mt-3 btn-small-text'>{oefening.label}</span>
                    </div>
                })
            }
        </div>
    </PrototypePage>
}
