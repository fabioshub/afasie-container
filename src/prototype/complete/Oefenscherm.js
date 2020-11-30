import React from 'react'
import { useHistory } from 'react-router-dom'
import { onClickAnalytics } from '../../Analytics'
import { PrototypePage } from './PrototypingTools'

const oefeningen = [
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
]

export const Oefenscherm = (props) => {
    const history = useHistory();

    return <PrototypePage childClass='oefenscherm'>
        <div className='h-100 signal-border d-flex flex-wrap justify-content-around align-items-center'>
            {
                oefeningen.map(oefening => {
                    return <div className='opdracht d-flex flex-column align-items-center' onClick={onClickAnalytics(() => history.push(`/prototype/${oefening.link}`), oefening.label)}>
                        <div className='rectangle signal-border d-flex justify-content-center' />
                        <span className='signal-border p-2 mt-3'>{oefening.label}</span>
                    </div>
                })
            }
        </div>
    </PrototypePage>
}
