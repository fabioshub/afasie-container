import React from 'react';
import { Link } from 'react-router-dom';

export const concepts = [
    {
        title: 'geluid en klik',
        href: '/concepten/geluid-en-klik'
    },
    {
        title: 'gevoel',
        href: '/concepten/gevoel'
    }
];

export default () => {
    return <div className="choose">
        <div className="choose-container">
        <div className="choose-sub first">
            <span className="choose-sub-title">Introductie<hr width='80px' align='left' color='white'/></span>
            Dit is een intro tekst
            </div>
            <div className="choose-sub second">
            <span className="choose-sub-title second">Concepten<hr width='80px' align='right' color='white'/></span>
            {
                concepts.map((c) => {
                return <Link to={c.href}><div className="choose-option">{c.title}</div></Link>
                })
            }
            </div>
        </div>
        {/* <Link to='/proptotypes'><div className="choose-option">Prototypes</div></Link> */}
    </div>
}