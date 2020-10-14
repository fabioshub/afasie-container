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
    return <><div className="choose">
        <div className="choose-container">
            <div className="choose-sub first">
                <span className="choose-sub-title">Introductie</span>
                <div className="choose-sub-intro">
            Hi! Wat fijn dat jij onze prototypes wil bekijken en testen. Wij zijn team Digital Progress en wij houden ons in deze minor bezig met de ontwerpvraag: “Hoe kunnen we ervoor zorgen dat afasiepatiënten, met ieder hun eigen behoeftes, zelfstandig kunnen blijven oefenen nadat de behandeling met de logopedist is afgerond?”
                <br /><br />
Afasiepatiënten zijn mensen met niet aangeboren hersenletsel, waardoor iemand (door bijvoorbeeld een hersenbloeding) afasie kan krijgen. Afasie houdt in dat je moeite hebt met taalproductie en taalbegrip. Hierdoor krijg je moeite met praten of schrijven, waardoor de afasiepatiënt moeite heeft met communiceren. Ook zijn er bijkomende beperkingen, zoals visuele beperkingen (bijvoorbeeld: wazig zien) of fysieke beperkingen (bijvoorbeeld: een verlamming aan de rechterhand). Om beter te worden in het communiceren, krijgt de afasiepatiënt logopedie. Als de afasiepatiënt na verloop van tijd geen verbetering meer vertoond tijdens de logopedie, wordt de logopedie langzaam afgebouwd totdat de afasiepatiënt is uitbehandeld. Dit is het moment waarop de afasiepatiënt zelfstandig verder gaat met oefenen.
                <br /><br />
Momenteel bestaan er al wat apps en platformen waar afasiepatiënten op kunnen oefenen. Wij hebben drie ideeën bedacht om het zelfstandig oefenen nog leuker en effciënter te maken.
                <br /><br />
Zou je na het oefenen ook nog de bijhorende vragenlijst willen invullen? Dat zou ons enorm helpen! Alvast bedankt.
            </div>
            </div>
            <div className="choose-sub second">
                <div>
                Scroll naar beneden <br />
               voor concepten 
                    </div>
                <i className='fas fa-arrow-down arrow-down' />
            </div>
        </div>
        {/* <Link to='/proptotypes'><div className="choose-option">Prototypes</div></Link> */}
    </div>
    <div className='opties-page'>
    <span className="choose-sub-title-concepten">Concepten</span>
    <div className='opties'>
        <Link to='/concepten/geluid-en-klik/video' className='opties-o o1'><div className='opties-o-container'>geluid en klik</div></Link>
        <Link to='/concepten/gevoel/video' className='opties-o'><div className='opties-o-container'>gevoel</div></Link>
        <Link to='/concepten/mijlpaal/video' className='opties-o'><div className='opties-o-container'>Voortgang</div></Link>
    </div>
    </div>
    </>
}