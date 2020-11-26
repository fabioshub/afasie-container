import React from 'react';
import { Container, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 250
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const buttons = ['Gehele prototype 1.0 (leeg)', 'Planten', 'oefeningen', 'prijzenkast', 'instellingen']

export default () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return <>
                <div className='d-flex flex-wrap w-100 align-item-center justify-content-center' style={{height: '100vh'}}>
                    { buttons.map((t, i) => (
                            <Link href={i === 0 ? `/prototype` : `/concepten/${t}`} className='d-flex align-items-center mr-1 ml-1'><Button variant='contained' color='light'>{t.charAt(0).toUpperCase() + t.slice(1)}</Button></Link>
                    ))}
                </div>
    </>
}