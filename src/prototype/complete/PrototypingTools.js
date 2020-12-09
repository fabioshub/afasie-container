import React, {useState, useEffect} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { isTablet, isIPad13 } from 'react-device-detect';
const screenWidth = 1024;
const screenHeight = 768;
const scale = 0.9;
const realScale = 1;

const VERTICAL = 90;
const VERTICAL_UPSIDE_DOWN = -90;

function useTilt() {
	const [tilt, setTilt] = useState(0);
	React.useEffect(() => {
		const handleTilt = () => setTilt(window.orientation);
		handleTilt();
		window.addEventListener('orientationchange', handleTilt);
		return () => window.removeEventListener('orientationchange', handleTilt);
	}, []);
	return tilt === VERTICAL || tilt === VERTICAL_UPSIDE_DOWN;
}

const getDim = (kind) => {
    if (isTablet || isIPad13)  {
        if (kind === 1024) return window.innerWidth;
        if (kind === 768) return window.innerHeight;
    }
    return kind * scale;
}

export const PrototypePage = ({children, childClass}) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    let shouldTilt = useTilt();

    useEffect(() => {
        setWidth(getDim(screenWidth))
        setHeight(getDim(screenHeight))
    }, [])

    return ((isTablet || isIPad13) && shouldTilt) || (!isTablet && !isIPad13) ? <div className='prototype-page-holder'><div style={{height, width, maxHeight: height, maxWidth: width}} className={`prototype-page ${childClass && childClass} scroll2`}><PrototypeHeader />{children}</div></div> : <div style={{height: '100vh', width: '100vw'}} className=' d-flex justify-content-center align-items-center'><span className='default-text'>Draai uw scherm een kwartslag</span></div>
}

export const Button = (props) => <button {...props}>{props.children}</button>; hallo kanker hond
export const PrototypeHeader = ({children}) => <div className='prototype-header'><span><MenuIcon style={{fontSize: '50px', marginTop: '10px'}} /></span>{children}</div>;