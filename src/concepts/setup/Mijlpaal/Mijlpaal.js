import React, { useState } from 'react';
import './Mijlpaal.scss';
import { Link } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import MobileStepper from '@material-ui/core/MobileStepper';
import ProgressMobileStepper from './Stepper';
import { Snackbar } from '@material-ui/core';


export default () => {
    const [activeStep, setActiveStep] = React.useState({
        // 1: 2,
        // 2: 1,
        3: 3,
    });
    const [steps, setSteps] = React.useState({
        1: [<i class="far fa-2x fa-frown-open"></i>, <i class="far fa-2x fa-meh"></i>, <i class="far fa-2x fa-smile"></i>, <i class="far fa-2x fa-grin"></i>, <i class="far fa-2x fa-laugh-beam"></i>],
        2: ['0%', '25%', '50%', '75%', '100%'],
        3: ['Goede start!', 'Blijf zo doorgaan!', 'Je bent al over de helft!', 'Je hebt je doel bijna bereikt!', 'Fantastisch! Je hebt jezelf overtroffen!'],
    })

    const sAS = (e) => console.log(e)

    return <div className='mijlpaal-pagina'>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            message={<div>Dit zijn milestones. Deze geven weer hoe ver een persoon is in een opdracht. <br /> Hier zijn 4 voorbeelden. Je kan zelf de progressie simuleren met de knoppen.</div>}
        />
        {
            Object.keys(activeStep).map(s => {
                return <ProgressMobileStepper text={steps[s][activeStep[s]]} activeStep={activeStep[s]} setActiveStep={(e) => setActiveStep(prev => ({ ...prev, [s]: e }))} />
            })
        }
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScfXtCBB7nQsUExGbrVGnANhVERKVE61HgM5EkvTC8spkKmnw/viewform?usp=sf_link'>Naar de vragenlijst</a>
    </div>
}
