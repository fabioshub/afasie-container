import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return <div className="choose">
        <Link to='/concepten'><div className="choose-option">Concepten</div></Link>
        <Link to='/proptotypes'><div className="choose-option">Prototypes</div></Link>
    </div>
}