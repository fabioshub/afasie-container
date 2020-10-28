import './GeluidEnKlik.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container, Checkbox, Snackbar, Button } from '@material-ui/core';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import RadioButtonCheckedIcon from '@material-ui/icons/FiberManualRecord';
import UIfx from 'uifx';
import clsx from 'clsx';
import tickAudio from './tinyButton.mp3';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Check from '@material-ui/icons/Check';

const tick = new UIfx({ asset: tickAudio });

const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 25px)',
      right: 'calc(50% + 25px)',
    },
    active: {
      '& $line': {
        borderColor: '#2D5485',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#2D5485',
      },
    },
    line: {
      borderColor: '#eaeaf0',
      borderTopWidth: 2,
      borderRadius: 1,
    },
  })(StepConnector);
  
  const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#2D5485',
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
        backgroundColor: '#2D5485',
      zIndex: 1,
      width: 20,
      height: 20,
      borderRadius: '50%',
      fontSize: 18,
    },
  });
  
  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <div className={classes.completed} />: <div className={classes.circle} />}
      </div>
    );
  }

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

const letterGrepen = ['Goe', 'de', 'mor', 'gen']


export default () => {
    const [checkboxStates, setCheckboxStates] = useState(initCheckBoxes)
    const ref = useRef(0);

    const changeCheckboxState = (index) => {
        setCheckboxStates(prev => ({ ...prev, [index]: !checkboxStates[index] }))
    }

    useEffect(() => {
        const onKeyDown = ({ key }) => {
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
            <div className='geluidEnKlik-container'>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Stepper alternativeLabel activeStep={ref.current} connector={<QontoConnector />}>
                    {letterGrepen.map((label, i) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}><div className={`lettergreep-container ${checkboxStates[i] ? 'correct' : ''}`}>
                        {label}
                        </div></StepLabel>
                    </Step>
                    ))}
                </Stepper>
                    </div>
                {
                    letterGrepen.map((letterGreep, i) => {
                        return <div>
                        
    
                        </div>
                    })
                }
            </div>
        </div>
        </Container>
    </>;
}