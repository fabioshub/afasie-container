import React from 'react';
import './Concepts.css';

const concepts = [
    {
        title: 'geluid en klik',
        href: '/concepts/geluidEnKlik'
    },
    {
        title: 'geluid en klik',
        href: '/concepts/geluidEnKlik'
    }
];

const Concept = props => {
    const {title, href} = props;
    return <a href={href}><div className='conceptblock'>
        <div className='conceptblock-body'>
            {title}
        </div>
        <div className='conceptblock-footer'></div>
    </div></a>
}

export default () => {
    return <div className='concepts'>
        {
            concepts.map(con => <Concept {...con} />)
        }
    </div>
}