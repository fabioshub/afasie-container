import './GeluidEnKlik.scss';
import React, { useState, useEffect, useRef } from 'react';
import {Grid, Container, Checkbox, Snackbar} from '@material-ui/core';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import UIfx from 'uifx';
import tickAudio from './tinyButton.mp3';

const tick = new UIfx({asset: tickAudio});

const initCheckBoxes = {
    0: false,
    1: false,
    2: false,
    3: false
}

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  

export default () => {
    const [checkboxStates, setCheckboxStates] = useState(initCheckBoxes)
    const ref = useRef(0);

    const changeCheckboxState = (index) => {
        setCheckboxStates(prev => ({...prev, [index]: !checkboxStates[index]}))
    }

    useEffect(() => {
        const onKeyDown = ({key}) => {
            tick.play(1);
            if (key === ' ') {
                console.log(ref.current)
                if (ref.current === 4) {
                    ref.current = 0;
                    return setCheckboxStates(initCheckBoxes)
                }
                changeCheckboxState(ref.current)
                ref.current++;
            }
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
    <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={true}
        message="Klik op spatie terwijl je de lettergreep uitspreekt"
      />
      <Container><div className='geluidEnKlik'>
        <Grid container className='grid-row main'>
            <Grid container item className='grid-row'>
                <Grid item xs={2} className='grid-col' style={{color: checkboxStates[0] ? 'rgb(207, 122, 203)' : 'grey'}}>
                    Goe
                </Grid>
                <Grid item xs={1} className='grid-col between'>-</Grid>
                <Grid item xs={2} className='grid-col' style={{color: checkboxStates[1] ? 'rgb(85, 218, 228)' : 'grey'}}>
                    de
                </Grid>
                <Grid item xs={1} className='grid-col between'>-</Grid>
                <Grid item xs={2} className='grid-col' style={{color: checkboxStates[2] ? 'rgb(76, 218, 72)' : 'grey'}}>
                    mor
                </Grid>
                <Grid item xs={1} className='grid-col between'>-</Grid>
                <Grid item xs={2} className='grid-col' style={{color: checkboxStates[3] ? 'rgb(224, 81, 38)' : 'grey'}}>
                    gen
                </Grid>
            </Grid>
            <Grid container item className='grid-row'>
                <Grid item xs={2} className='grid-col o1'>
                    <Checkbox
                        className='checkbox'
                        checked={checkboxStates[0]}
                        onChange={() => changeCheckboxState(0)}
                        icon={<RadioButtonUncheckedOutlinedIcon fontSize='big' />} checkedIcon={<CheckCircleOutlineOutlinedIcon />} 
                    />
                </Grid>
                <Grid item xs={1} className='grid-col between'></Grid>
                <Grid item xs={2} className='grid-col o2'>
                    <Checkbox
                        className='checkbox'
                        checked={checkboxStates[1]}
                        onChange={() => changeCheckboxState(1)}
                        icon={<RadioButtonUncheckedOutlinedIcon />} checkedIcon={<CheckCircleOutlineOutlinedIcon />} 
                    />                </Grid>
                <Grid item xs={1} className='grid-col between'></Grid>
                <Grid item xs={2} className='grid-col o3'>
                    <Checkbox
                        className='checkbox'
                        checked={checkboxStates[2]}
                        onChange={() => changeCheckboxState(2)}
                        icon={<RadioButtonUncheckedOutlinedIcon />} checkedIcon={<CheckCircleOutlineOutlinedIcon />} 
                        />
                </Grid>
                <Grid item xs={1} className='grid-col between'></Grid>
                <Grid item xs={2} className='grid-col o4'>
                    <Checkbox
                        className='checkbox'
                        checked={checkboxStates[3]}
                        onChange={() => changeCheckboxState(3)}
                        icon={<RadioButtonUncheckedOutlinedIcon />} checkedIcon={<CheckCircleOutlineOutlinedIcon />} 
                        />
                </Grid>
            </Grid>
        </Grid>
    </div>
    </Container>
    </>;
}