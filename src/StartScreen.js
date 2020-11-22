import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Grid, Button } from '@material-ui/core';

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
    let location = useLocation();

    return <Container className="scroll1">
        <div className="choose-container flex-column justify-content-center align-items-start">
                <span className="choose-sub-title">Update 1.0 - Concept milestone <span className='ml-2' style={{fontSize: '13px', color: 'grey'}}>huidig</span></span>
                <Link to='/prototype'><Button variant='contained' color='primary'>Prototype</Button></Link>
                <div className="d-flex flex-column fs-13 align-items-start text-left">
                    Voordat de gebruiker aan de slag gaat met het maken van oefeningen zal hij/zij eerst een doel moeten opstellen waarmee hij/zij de aangeven tijd (dagen, weken of dagen) aan gaat werken.
                    Vervolgens wordt er een plantje aan het mijlpaal gekoppeld. Ook zullen er doelen zijn waar de gebruiker uit kan kiezen.
                    <br /><br />
                    Deze plant zal groeien naarmate er oefeningen worden gemaakt. Wanneer het doel bereikt is zal het plantje volledig volgroeid zijn en kan deze worden geplaatst in de prijzenkast. De gebruiker kan dan een nieuw doel/mijlpaal opstellen met daarbij een nieuwe plant die hij door het maken van oefeningen moet verzorgen.
                    <br /><br />
                    Wanneer de gebruiker niet achter zijn oefeningen zit over een lange tijd kan het plantje ook achteruit gaan. Het plantje kan afzwakken, uitdrogen, onkruid etc. Na een poosje krijgt de gebruiker ook een push melding om te vertellen dat hij zijn oefeningen moet maken anders gaat het plantje slap hangen. Om er toch voor te zorgen dat het plantje weer tot leven komt kan de gebruiker een bonus oefening doen om hem te redden. Dan kan de gebruiker weer verder met zijn plantje waar hij was gebleven.
                <div className='mt-5 d-flex w-100 flex-row'>
                        <div className='d-flex flex-column'>
                            <span className='font-weight-bold mb-3'>De loop van een mijlpaal</span>
                            <span>1. Stel een mijlpaal in / Al vooraf gestelde achievements</span>
                            <span>2. Je begint met een lege pot voor die mijlpaal</span>
                            <span>3. Je maakt een oefening</span>
                            <span>4. De plant gaat groeien</span>
                            <span>5. Herhaal stap 3 {'&'} 4</span>
                            <span>6. Plant is volgroeid</span>
                            <span>7. Plant komt bij verzameling van andere volgroeide planten</span>
                        </div>
                        <div className='d-flex flex-column ml-5'>
                        <span className='font-weight-bold mb-3'>Voorbeeld planten</span>
                            <span>Zonnebloem</span>
                            <span>Polkadot Begonia</span>
                            <span>Aloe Vera plant</span>
                            <span>Cactus</span>
                            <span>Pannenkoekplant</span>
                            <span>Tulp</span>
                            <span>Bonsai</span>
                            <span>etc.</span>
                    </div>
                    </div>
                </div>
        </div>
        <div className="choose-container">
            <div className="choose-sub first">
                <div className="choose-sub-title fs-13 ">Oud, klik hier voor de nieuwse update: <span onClick={() => window.scroll(0, 0)} className='goto-btn'>update 1.0</span></div>
                <span className="choose-sub-title">Introductie</span>
                <div className="choose-sub-intro">
                    Wij zijn team Digital Progress en wij houden ons in deze minor bezig met de ontwerpvraag: “Hoe kunnen we ervoor zorgen dat afasiepatiënten, met ieder hun eigen behoeftes, zelfstandig kunnen blijven oefenen nadat de behandeling met de logopedist is afgerond?”
                <br /><br />
                    <div style={{ marginTop: '30px', fontSize: '10pt', fontWeight: 'bold' }}>
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
    </Container >
}