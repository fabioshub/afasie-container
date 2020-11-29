import React from 'react'
import { PrototypePage } from './PrototypingTools'
import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const PBar = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        width: '40%',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(LinearProgress);

export const MijlpaalOverzicht = (props) => {
    return <PrototypePage childClass='mijlpaaloverzicht'>
        <div className=' h-100 d-flex flex-column'>
            <div className='d-flex w-100 align-items-center p-4'>
                <div className='signal-border mr-3' style={{height: '500px', width: '400px'}}></div>
                <div className='d-flex flex-column w-100 signal-border p-3'>
                    <span className=''>Mijlpaal</span>
                    <PBar variant="determinate" value={60} />
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-around'>
                    <div className='d-flex align-items-center flex-column'><div className='placeholder signal-border'></div><PBar variant="determinate" value={60} /></div>
                    <div className='d-flex align-items-center flex-column'><div className='placeholder signal-border'></div><PBar variant="determinate" value={60} /></div>
                    <div className='d-flex align-items-center flex-column'><div className='placeholder signal-border'></div><PBar variant="determinate" value={60} /></div>
                </div>
            </div>
        </div>
    </PrototypePage>
}
