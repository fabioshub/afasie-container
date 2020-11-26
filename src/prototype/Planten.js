import React from 'react';
import './Planten.scss';
import zonnebloem from './sprites/planten/zonnebloem.gif';

export default () => {
    return <div className='d-flex justify-content-center align-items-center w-100 planten-p' style={{ minHeight: '100vh' }}>
        <img src={zonnebloem} alt='kutbloem' style={{maxHeight: '300px', maxWidth: '100%'}}/>
    </div>
}