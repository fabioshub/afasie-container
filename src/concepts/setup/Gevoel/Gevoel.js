import React from 'react';
import css from './Gevoel.css';
import { RadioGroup, FormLabel, FormControl, FormControlLabel, Radio, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useStyles } from '@material-ui/styles';

const RadioGroupCustom = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '30px',
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

    return <div>
        <FormControl component="fieldset" style={{width: '100%'}}> 
            <FormLabel component="legend">Vandaag voel ik mij:</FormLabel>
            <RadioGroupCustom aria-label="mood" name="mood1" className='gevoel-group' classes>
                <Grid container className='grid-row-gevoel' justify='center'>
                    <Grid item container xs={3} className='grid-col-gevoel'>
                        <Grid item className='grid-row-col'>
                            <i class="far fa-angry"></i>
                            <FormControlLabel value="boos" control={<Radio />} label="boos" />
                        </Grid>
                    </Grid>
                    <Grid item container xs={2} className='grid-col-gevoel'>
                        <Grid item className='grid-row-col'>
                        <i class="far fa-angry"></i>
                            <FormControlLabel value="onverschillig" control={<Radio />} label="onverschillig" />
                        </Grid>
                    </Grid>
                    <Grid item container xs={2} className='grid-col-gevoel'>
                        <Grid item className='grid-row-col'>
                        <i class="far fa-meh"></i>
                            <FormControlLabel value="verdrietig" control={<Radio />} label="verdrietig" />
                        </Grid>
                    </Grid>
                    <Grid item container xs={2} className='grid-col-gevoel'>
                        <Grid item className='grid-row-col'>
                        <i class="far fa-smile"></i>
                            <FormControlLabel value="blij" control={<Radio />} label="blij" />
                        </Grid>
                    </Grid>
                </Grid>
            </RadioGroupCustom>
        </FormControl>
    </div >
};
