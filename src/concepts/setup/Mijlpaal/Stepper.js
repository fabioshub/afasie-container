import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'rgb(235, 235, 235)',
    borderRadius: '5px',
    marginTop: '15px',
    color: 'white'
  },
});

export default function ProgressMobileStepper(props) {
    const {activeStep, setActiveStep, text} = props;

  const classes = useStyles();
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className='stepper-holder'>
      <div>{text}</div>
    <MobileStepper
      variant="progress"
      steps={5}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} className='stepper-button' variant='contained' disabled={activeStep === 4}>
          Stap vooruit
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} className='stepper-button' variant='contained' disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Stap terug
        </Button>
      }
    />
    </div>
  );
}