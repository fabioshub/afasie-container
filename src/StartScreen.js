import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import {Container, Grid} from '@material-ui/core';

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
    const ref = useRef();

    return <Container><div className="choose">
        <div className="choose-container">
            <div className="choose-sub first">
                <span className="choose-sub-title">Introductie</span>
                <div className="choose-sub-intro">
                Wij zijn team Digital Progress en wij houden ons in deze minor bezig met de ontwerpvraag: “Hoe kunnen we ervoor zorgen dat afasiepatiënten, met ieder hun eigen behoeftes, zelfstandig kunnen blijven oefenen nadat de behandeling met de logopedist is afgerond?”
                <br /><br />
Afasiepatiënten zijn mensen met niet aangeboren hersenletsel, waardoor iemand (door bijvoorbeeld een hersenbloeding) afasie kan krijgen. Afasie houdt in dat je moeite hebt met taalproductie en taalbegrip. Hierdoor krijg je moeite met praten of schrijven, waardoor de afasiepatiënt moeite heeft met communiceren. Ook zijn er bijkomende beperkingen, zoals visuele beperkingen (bijvoorbeeld: wazig zien) of fysieke beperkingen (bijvoorbeeld: een verlamming aan de rechterhand). Om beter te worden in het communiceren, krijgt de afasiepatiënt logopedie. Als de afasiepatiënt na verloop van tijd geen verbetering meer vertoond tijdens de logopedie, wordt de logopedie langzaam afgebouwd totdat de afasiepatiënt is uitbehandeld. Dit is het moment waarop de afasiepatiënt zelfstandig verder gaat met oefenen. 
Momenteel bestaan er al wat apps en platformen waar afasiepatiënten op kunnen oefenen. Wij hebben drie ideeën bedacht om het zelfstandig oefenen nog leuker en effciënter te maken.
            <div style={{marginTop: '30px', fontSize: '10pt', fontWeight: 'bold'}}>
                Klik op de knoppen hiernaast om onze concepten te bekijken.
            </div>
            </div>
            </div>
            <div className="choose-sub second" >
            <Link to='/concepten/geluid-en-klik/video' className='tocons'><div>Geluid en Klik</div></Link>
        <Link to='/concepten/gevoel/video' className='tocons'><div>Gevoel</div></Link>
        <Link to='/concepten/mijlpaal/video' className='tocons'><div>Voortgang</div></Link>
            </div>
        </div>
        {/* <Link to='/proptotypes'><div className="choose-option">Prototypes</div></Link> */}
    </div>
    </Container>
}