import React from 'react'
import { Link } from 'react-router-dom'
import { PrototypePage } from './PrototypingTools'

const oefeningen = [
    {
        label: 'Opdracht',
        link: '/',
    },
    {
        label: 'Opdracht',
        link: '/',
    },
    {
        label: 'Opdracht',
        link: '/',
    },
    {
        label: 'Opdracht',
        link: '/',
    },
    {
        label: 'Opdracht',
        link: '/',
    },
    {
        label: 'Opdracht',
        link: '/',
    },
]

export const Oefenscherm = (props) => {
    return <PrototypePage childClass='oefenscherm'>
        <div className='h-100 signal-border d-flex flex-wrap justify-content-around align-items-center'>
            {
                oefeningen.map(oefening => {
                    return <div className='opdracht d-flex flex-column align-items-center'>
                        <div className='rectangle signal-border d-flex justify-content-center' />
                        <span className='signal-border p-2 mt-3'>{oefening.label}</span>
                    </div>
                })
            }
        </div>
    </PrototypePage>
}
