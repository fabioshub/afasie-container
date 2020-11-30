import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const screenWidth = 1024;
const screenHeight = 768;
const scale = 0.9;

const getDim = (kind) => {
    return kind * scale;
}

export const Button = (props) => <button {...props}>{props.children}</button>;
export const PrototypeHeader = ({children}) => <div className='prototype-header'><span><MenuIcon style={{fontSize: '50px', marginTop: '10px'}} /></span>{children}</div>;
export const PrototypePage = ({children, childClass}) => <div className='prototype-page-holder'><div style={{height: getDim(screenHeight), width: getDim(screenWidth), maxHeight: getDim(screenHeight), maxWidth: getDim(screenWidth)}} className={`prototype-page ${childClass && childClass} scroll2`}><PrototypeHeader />{children}</div></div>