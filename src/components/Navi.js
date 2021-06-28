import React from 'react';
import {Link} from 'react-router-dom';
import './Navi.css';

function Navi() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Navi;