import React, { useState } from 'react';
import './Gevoel.scss';
import { RadioGroup, FormControl, FormControlLabel, Radio, Snackbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const RadioGroupCustom = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '30px',
        backgroundColor: 'black'
    },
    label: {
        textTransform: 'capitalize',
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
    }
})(RadioGroup);

export default () => {
    const classes = withStyles();
    const [value, setValue] = React.useState('boos');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return <div><div className='gevoel-container'>
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={true}
            message="Hoe voel je je vandaag?"
        />
        <FormControl component="fieldset">
            <RadioGroup aria-label="mood" name="mood1" onChange={handleChange} className='gevoel-group' className='radio-button-container'>
                <div className='mood-option o1'>
                    <FormControlLabel value='boos' control={<Radio />} label={<i class="far fa-3x fa-angry"></i>} />
                </div>
                <div className='mood-option o2'>
                    <FormControlLabel value="onverschillig" control={<Radio />} label={<i class="far fa-3x fa-meh"></i>} />
                </div>
                <div className='mood-option o3'>
                    <FormControlLabel value="verdrietig" control={<Radio />} label={<i class="far fa-3x fa-sad-tear"></i>} />
                </div>
                <div className='mood-option o4'>
                    <FormControlLabel value="blij" control={<Radio />} label={<i class="far fa-3x fa-smile"></i>} />
                </div>
            </RadioGroup>
        </FormControl>
    </div >
        <div className="gevoel-text">
            <h3>Gevoel</h3>
            <p>Voelt de afasiepatiënt zich minder fijn voor het oefenen begint, dan krijgt de afasiepatiënt wat leukere of makkelijkere oefeningen, zodat er sneller een succeservaring behaald wordt.
            Voelt de afasiepatiënt zich écht niet gemotiveerd / in staat om vandaag te oefenen, dan is er de mogelijkheid om een oefening / spelletje te doen die wat verder van de standaard oefeningen vandaan staat. Zie dit als een soort energizer, waardoor de afasiepatiënt toch nog iets oefent, maar de nadruk vooral ligt op het motiveren van de afasiepatiënt.
            </p>
        </div>
    </div>
};
