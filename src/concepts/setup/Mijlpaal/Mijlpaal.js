import React, { useState } from 'react';
import './Mijlpaal.scss';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

export default () => {
    const stepsOne = ['25%', '50%', '75%', '100%'];
    const stepsTwo = [<i class="far fa-3x fa-frown"></i>, <i class="far fa-3x fa-meh"></i>, <i class="far fa-3x fa-smile"></i>, <i class="far fa-3x fa-meh"></i>];
    const stepsThree = ['25%', '50%', '75%', '100%'];

    return <div>
        <Stepper>
            {stepsOne.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Stepper>
            {stepsTwo.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Stepper>
            {stepsThree.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Stepper>
            {stepsThree.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
};
