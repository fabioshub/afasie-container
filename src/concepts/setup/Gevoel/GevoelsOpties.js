import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { Snackbar } from '@material-ui/core';

const message = <div>
    Deze opdracht is enkel een placeholder. <br />
    De focus ligt dan ook niet op de individuele opdracht, <br />
    maar op het gehele concept. <br />
    Verschillende emoties geven andere opdrachten. <br /><br />
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf3TryUP5ybksU1b6cUEy-4Ao3AANRhR41Axl1vleWKrwV1gw/viewform?usp=sf_link'><Button variant='contained'>Naar de vragenlijst</Button></a>
</div>

export const Boos = () => {
    return <div className='gevoels-optie-pagina'>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            message={message}
        />
        <div className='gevoels-optie-container'>
            <span className='gevoels-optie-pagina-title'>Zoek twee dezelfde plaatjes bij elkaar</span>
            <div className='gevoels-optie-exc'>
                <Grid spacing={0} container>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
                            return <Grid item md={4} className='mem-card'><div className='mem-card-container'>{(index === 1 || index === 8) && <img className='mem-image' src='https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg' />}</div></Grid>
                        })
                    }
                </Grid>
            </div>
        </div>
    </div>
}

export const Onverschillig = () => {
    return <div className='gevoels-optie-pagina'>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            message={message}
        />
        <div className='gevoels-optie-container'>
            <span className='gevoels-optie-pagina-title'>Vul de ontbrekende letter in.</span>
            <div className='gevoels-optie-exc'>
                <img src='https://teamnijhuis.com/nl/wp-content/uploads/sites/2/2012/01/zien-we-door-de-bomen-het-bos-nog-wel.jpg' />
                <span>Bo..</span>
                <TextField id="outlined-basic" label="Vul hier de letter in" variant="outlined" />

            </div>
        </div>
    </div>
}

export const Verdrietig = () => {
    return <div className='gevoels-optie-pagina'>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            message={message}
        />
        <div className='gevoels-optie-container'>
            <span className='gevoels-optie-pagina-title'>Wat zie je op de afbeelding? Spreek het uit.</span>
            <div className='gevoels-optie-exc'>
                <img src='https://tagonce.nl/wp-content/uploads/2019/02/kat-kwijt.jpeg' />
            </div>
        </div>
    </div>
}

export const Blij = () => {
    return <div className='gevoels-optie-pagina'>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            message={message}
        />
        <div className='gevoels-optie-container'>
            <span className='gevoels-optie-pagina-title'>Vul het ontbrekende woord in.</span>
            <div className='gevoels-optie-exc'>
                <img src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg' />
                <span>De vogel heeft mooie ....</span>
                <TextField id="outlined-basic" label="Vul hier het woord in" variant="outlined" />
            </div>
        </div>
    </div>
}