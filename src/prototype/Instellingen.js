import React from 'react';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 250
    },
    slider: {
        width: 300
    }
}));

export default () => {
    const classes = useStyles();
    return <>
        <Container className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid>
                    <Button>Lettergrootte</Button>
                </Grid>
                <Grid>
                    <Slider
                        className={classes.slider}
                        defaultValue={10}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        marks
                        min={5}
                        max={15}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid>
                    <Button>Kleur</Button>
                </Grid>
                <Grid>

                </Grid>
                <Grid>
                    <Button>Taal</Button>
                </Grid>
                <Grid>
                    <Select value={'Nederlands'}>
                        <MenuItem value="Nederlands">Nederlands</MenuItem>
                        <MenuItem value={'English'}>English</MenuItem>
                        <MenuItem value={'Deutsch'}>Deutsch</MenuItem>
                        <MenuItem value={'Italiano'}>Italiano</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </Container>
    </>
}