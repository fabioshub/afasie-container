import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
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

const buttons = ['oefeningen', 'prijzenkast', 'instellingen']

export default () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return <>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    { buttons.map(t => (
                        <Grid key={t} item>
                            <Link to={`/prototype/${t}`}><Button>{t.charAt(0).toUpperCase() + t.slice(1)}</Button></Link>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    </>
}