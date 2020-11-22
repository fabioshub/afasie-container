import React from 'react';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import plaatje from './bloem-met-bril.png';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 250
    }
}));

export default () => {
    const classes = useStyles();
    return <>
        <Container className={classes.root}>
           <img src={plaatje}/>
        </Container>
    </>
}